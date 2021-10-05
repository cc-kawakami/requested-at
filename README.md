# Requested At

## 使い方
```js
import RequestedAt from 'requested-at'

new RequestedAt({ env: 'production' }).getDate()
// Tue Oct 05 2021 17:42:27 GMT+0900 (日本標準時)
```

## クエリパラメータによるリクエストした日付の定義
以下のようにクエリパラメータを指定する。
```url
http://example.com?date=2022-01-01
```

```js
new RequestedAt({ env: 'development' }).getDate()
// Tue Feb 01 2022 00:00:00 GMT+0900 (日本標準時)

new RequestedAt({ env: 'staging' }).getDate()
// Tue Feb 01 2022 00:00:00 GMT+0900 (日本標準時)
```

環境を `production` に指定した場合には、ユーザー定義の日付は無視される。
```js
new RequestedAt({ env: 'production' }).getDate()
// Tue Oct 05 2021 17:42:27 GMT+0900 (日本標準時)
```
