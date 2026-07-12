---
title: Chest Shop
permalink: /guides/chest-shop/
---

<!-- Copyright (c) 2026 Jericho Crosby (Chalwk). All rights reserved. -->

# ChestShop Tutorial <!-- omit from toc -->

Welcome to the **ChestShop Tutorial**! With ChestShop, you can create your own shops using signs and chests, making it
easy to buy and sell items. Follow this step-by-step guide to set up your shop efficiently.

---

## Table of Contents <!-- omit from toc -->

- [Step 1: Build Your Shop](#step-1-build-your-shop)
- [Step 2: Place a Chest](#step-2-place-a-chest)
- [Step 3: Stock the Chest](#step-3-stock-the-chest)
- [Step 4: Create a Sign](#step-4-create-a-sign)
  - [Example 1: Basic Shop (buy only)](#example-1-basic-shop-buy-only)
  - [Example 2: Advanced Shop (buy and sell)](#example-2-advanced-shop-buy-and-sell)
  - [Example 3: Advanced Configuration (price formats)](#example-3-advanced-configuration-price-formats)
- [Step 5: How Customers Buy or Sell Items](#step-5-how-customers-buy-or-sell-items)

---

## Step 1: Build Your Shop

Begin by constructing a designated area for your shop. Be creative as you can, an appealing shop design can attract more
customers!

Pro Tip: Use these materials for best results:

- `Oak Planks`
- `Glass Panes`
- `Item Frames`
- `Glowstone`

Example Shop Design:

<img src="{{ site.baseurl }}/assets/images/tutorials/chestshop_example.png" alt="img">

---

## Step 2: Place a Chest

Position your chest in an accessible location. Ensure clear line of sight to the sign area.

---

## Step 3: Stock the Chest

Fill the chest with the items you wish to sell. Organizing your stock efficiently will make it easier for customers to
find what they need. For example:

1. High-demand resources (`Diamonds`, `Netherite`)
2. Building materials (`Oak_Logs`, `Stone`)
3. Rare items (`Enchanted_Golden_Apples`, `Dragon_Egg`)
4. Common items (`Iron_Ingot`, `Gold_Ingot`)
5. Consumables (`Apple`, `Bread`)

---

## Step 4: Create a Sign

Create your shop sign with this exact formatting:

| Line | Value         | Description                                               |
| ---- | ------------- | --------------------------------------------------------- |
| 1    | `Owner Name`  | Auto-filled by the system.                                |
| 2    | `[Quantity]`  | Number of items per transaction (1-64).                   |
| 3    | `[Price]`     | Format: `B <Amount>` or `B <Buy Price> : S <Sell Price>`. |
| 4    | `[Item Name]` | Item name or ID. Use `/iinfo` to find the correct ID.     |

### Example 1: Basic Shop (buy only)

| Line | Value     | Description                       |
| ---- | --------- | --------------------------------- |
| 1    | `Chalwk`  | Auto-filled.                      |
| 2    | `16`      | Item quantity.                    |
| 3    | `B 100`   | Players can buy 16 items for 100. |
| 4    | `Diamond` | Item name (must match exactly).   |

### Example 2: Advanced Shop (buy and sell)

| Line | Value          | Description                                           |
| ---- | -------------- | ----------------------------------------------------- |
| 1    | `Chalwk`       | Auto-filled.                                          |
| 2    | `16`           | Item quantity.                                        |
| 3    | `B 100 : S 25` | Players buy 16 items for 100 or sell 16 items for 25. |
| 4    | `Diamond`      | Item name (must match exactly).                       |

### Example 3: Advanced Configuration (price formats)

| **Format**   | **Description**                    | **Example**  |
| ------------ | ---------------------------------- | ------------ |
| B 100        | Shop sells to players for 100 each | B 100        |
| S 50         | Shop buys from players for 50 each | S 50         |
| B 100 : S 25 | Dual pricing (Buy/Sell)            | B 100 : S 25 |
| ? 75         | Auto-convert to best deal          | ? 75         |

💡 Pro Tip: The colon `:` must have spaces on both sides when using dual pricing!

---

## Step 5: How Customers Buy or Sell Items

| **Action**      | **Click Type**          | **Transaction**                      |
| --------------- | ----------------------- | ------------------------------------ |
| Purchase Single | `Right Click`           | 🔼 Takes 1 transaction from chest     |
| Purchase Stack  | `Shift` + `Right Click` | 🔼 Takes max stacks (inventory space) |
| Sell Single     | `Left Click`            | 🔽 Adds 1 transaction to chest        |
| Sell Stack      | `Shift` + `Left Click`  | 🔽 Adds max stacks (chest space)      |

💡 Pro Tip: You can hold `Shift` while clicking to buy or sell multiple items at once.

---
