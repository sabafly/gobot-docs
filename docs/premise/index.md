---
title: 前提
sidebar_position: 2
lastmod: 2023-01-16T16:26:03.571Z
---

export const Warn = ({children}) => (
  <span
    style={{
      backgroundColor: '#cccc40',
      borderRadius: '2px',
      color: '#f00',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

このボットを利用するには前提としてボットがサーバーに導入されている必要があります。

## 導入

サーバーにはこの
[招待リンク](https://discord.com/api/oauth2/authorize?client_id=973391124389572608&permissions=8&scope=bot%20applications.commands)
でボットを招待することができます。

### 招待ページ

![invite guide 1](./img/invite-guide-1.png)

### 権限を与える

- **ボットは管理者権限がないと<Warn>正しく動作しません</Warn>。**

![invite guide 2](./img/invite-guide-2.png)

## 操作方法

基本アプリケーションコマンドを用いて操作します。
アプリケーションコマンドにアクセスするには三つの方法があります。

- スラッシュコマンド
- メッセージコマンド
- ユーザーコマンド

#### スラッシュコマンド

テキストチャンネルで `/`(スラッシュ) を入力して利用することができます。

![slash command sample](./img/slash-command-sample.png)

#### メッセージコマンド

任意のメッセージを右クリックか長押ししてメニューを開き、アプリから利用することができます。

![message command sample](./img/message-command-sample.gif)

#### ユーザーコマンド

任意のユーザーを右クリックか長押ししてメニューを開き、アプリから利用することができます。

![user command sample](./img/user-command-sample.gif)