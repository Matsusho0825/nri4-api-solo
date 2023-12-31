# nri4-api-solo

My First Project

## GET /api/fishes

### 説明

osakana データベースからすべての fish を取得する

### リクエストボディー

なし

### パスパラメーター

なし

### 出力

```
[
 {"id": 1, "name": "sake", "habitat": "japan", "cost_price": "100.00"},
 {"id": 2, "name": "hokke", "habitat": "china", "cost_price": "200.00"},
]
```

## GET /api/fishes/:id

### 説明

osakana データベースから指定した id の fish を取得する

### リクエストボディー

なし

### パスパラメーター

なし

### 出力

```
[
 {"id": 1, "name": "sake", "habitat": "japan", "cost_price": "100.00"},
 {"id": 2, "name": "hokke", "habitat": "china", "cost_price": "200.00"},
]
```

## POST /api/fishes

### 説明

osakana データベースに fish を追加する

## リクエストボディー

```
{"id": 1, "name": "sake", "habitat": "japan", "cost_price": "100.00"}
```

### パスパラメーター

id(int)

### 出力

なし

## Delete /api/fishes/:id

### 説明

osakana データベースから指定された id の fish を削除

## リクエストボディー

なし

### パスパラメーター

id(int)

### 出力

なし

## PATCH /api/fishes/:id

### 説明

osakana データベースの指定された id の fish の指定された項目を変更

## リクエストボディー

```
{ "key": "habitat","value": "china" }
```

### パスパラメーター

id(int)

### 出力

なし
