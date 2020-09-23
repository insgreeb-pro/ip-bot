# IP-BOT

Bot telegram untuk cek ip address.

## Cara menggunakan

1. Buat Bot Telegram menggunakan _botfather_ lalu simpan token nya.

1. Buat sebuah file dengan nama `.env` dengan isi

```
BOT_TOKEN=token123
```

2. Jalankan perintah dengan

```
yarn
yarn start
```

3. Cek IP dengan perintah `/ip` pada bot telegram.
   contoh hasil:

```
Wi-Fi
- 192.168.***.***
Local Area Connection
- 176.16.***.***
vEthernet (DockerNAT)
- 10.0.***.***
vEthernet (Default Switch) 2
- 172.18.***.***
```
