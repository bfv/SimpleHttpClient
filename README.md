# WIP: SimpleHttpClient 
Lightweight http client for OpenEdge. No https, this is primarily for IPC (to for example nodejs).
At the moment the OE client process is expected to run with `-cpinternal utf-8`

## Common 

For calling a server listening on http://localhost:3060/ initializing the client would look like:
```
define variable http as SimpleHttpClient no-undo.

http = new SimpleHttpClient('localhost', 3060).
```

## GET

```
define variable responseBody as longchar no-undo.

responseBody = http:Get('/').
```

## POST
POST are in two incarnations:

`Post(path as character, text as longchar).`  sends a `Content-Type: text/plain` message.
`Post(path as character, json as JsonObject).`  sends a `Content-Type: application/json` message. 


