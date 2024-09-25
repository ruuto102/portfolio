---
title: BEMの理解を深めて活用しよう
postedAt: 2021-08-14
---
今日のテーマは、BEMの考え方についてです。

# BEMとは
「**B**lock」  
「**E**lement」  
「**M**odifier」  
で分けてクラス名をつけます。

- Block
  - Blockとは、ヘッダーやフッターやセクションの独立したパーツのこと
  - Block内にBlockが入れ子になってもいいけども・・・長くなりすぎると管理がむずいよ
  
- Element
  - Block内にある要素
  - Elementは並列で複数存在する場合あり
  - ※入子が深くなる場合は、Blockを作成できないか検討する

- Modifier
  - パーツ構成は一緒だが「見た目」や「動き」の違うパーツを作成する際にModifierを使用
  - BlockやElementの変化
  
# BEMの命名
Block__element-modifier　の形
  
以上です！

最後まで見ていただいてありがとうございます！  
