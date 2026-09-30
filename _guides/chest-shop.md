---
title: Chest Shop
permalink: /guides/chest-shop/
description: "Set up a sign-and-chest shop and start trading."
icon: fa-store
order: 8
---

<!-- Copyright (c) 2026 Jericho Crosby (Chalwk). All rights reserved. -->

# ChestShop Tutorial

With ChestShop, you can create your own shops using signs and chests, making it easy to buy and sell items.
Follow this step-by-step guide to set up your shop efficiently.

<img src="{{ site.baseurl }}/assets/images/advertising/chest_shops.png" alt="ChestShop signs and chests in a JeriCraft market">

---

{% include toc.html %}

---

## Step 1: Build Your Shop

Begin by constructing a designated area for your shop. Be creative as you can, an appealing shop design can attract more customers!

> 💡 Tip: Stick to the materials in the [Medieval Building Guide]({{ site.baseurl }}/guides/medieval-building/). These work well:

- `Oak Planks`
- `Glass Panes`
- `Item Frames`
- `Lanterns`

> 💡 Tip: Choose a location that is easy for other players to reach. Placing your shop near spawn or a popular market area will attract more customers. You can also create a warp to your shop so players can teleport directly to it. See [Step 6](#step-6-create-a-warp-to-your-shop) for details.

<details>
<summary>Example Shop Design (click to expand)</summary>

<img src="{{ site.baseurl }}/assets/images/tutorials/chestshop_example.png" alt="Example ChestShop stall with signs above stocked chests">

</details>

---

## Step 2: Place a Chest

Position your chest in an accessible location. Ensure clear line of sight to the sign area.

---

## Step 3: Stock the Chest

Fill the chest with the items you wish to sell. Organizing your stock efficiently will make it easier for customers to find what they need. For example:

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

### Example 2: Advanced Shop (buy & sell)

| Line | Value          | Description                                           |
| ---- | -------------- | ----------------------------------------------------- |
| 1    | `Chalwk`       | Auto-filled.                                          |
| 2    | `16`           | Item quantity.                                        |
| 3    | `B 100 : S 25` | Players buy 16 items for 100 or sell 16 items for 25. |
| 4    | `Diamond`      | Item name (must match exactly).                       |

### Example 3: Advanced Configuration (price formats)

| **Format**   | **Description**                       | **Example**  |
| ------------ | ------------------------------------- | ------------ |
| B 100        | Players buy the sign quantity for 100 | B 100        |
| S 50         | Players sell the sign quantity for 50 | S 50         |
| B 100 : S 25 | Dual pricing (Buy/Sell)               | B 100 : S 25 |
| ? 75         | Auto-convert to best deal             | ? 75         |

> 💡 Tip: The colon `:` must have spaces on both sides when using dual pricing!
>
> 💡 Tip: Prices apply to the **whole sign quantity**, not per item. The [Price Guide]({{ site.baseurl }}/guides/prices/) lists per-item reference prices, so multiply by the quantity on your sign.

---

## Step 5: How Customers Buy or Sell Items

| **Action**      | **Click Type**          | **Transaction**                    |
| --------------- | ----------------------- | ---------------------------------- |
| Purchase Single | `Right Click`           | Takes 1 transaction from chest     |
| Purchase Stack  | `Shift` + `Right Click` | Takes max stacks (inventory space) |
| Sell Single     | `Left Click`            | Adds 1 transaction to chest        |
| Sell Stack      | `Shift` + `Left Click`  | Adds max stacks (chest space)      |

> 💡 Tip: You can hold `Shift` while clicking to buy or sell multiple items at once.

---

## Step 6: Create a Warp to Your Shop

You can create a warp that teleports players directly to your shop, making it much easier for customers to find and trade with you. This is especially useful if your shop is far from spawn or other popular areas.

### Creating a Warp

Stand at the location where you want players to arrive, then run:

```
/setwarp [warpName]
```

Replace `[warpName]` with a name for your warp, for example `/setwarp ChalwksDiamondShop`.

> 💡 Tip: Choose a clear, descriptive name so players can easily identify your shop.

### Managing Your Warps

| Command                  | Description                                           |
| ------------------------ | ----------------------------------------------------- |
| `/setwarp [warpName]`    | Creates a warp at your current location.              |
| `/removewarp [warpName]` | Deletes one of your own warps.                        |
| `/editwarp [warpName]`   | Opens the warp editing GUI for one of your own warps. |

### Warp Rules and Limits

- You can create at most **3 warps** per player. If you already have 3 and want to create another, you must remove one first.
- Warps can only be created in the **Survival world**.
- You cannot create warps inside faction territory that you do not own or are not a member of.
- Breaking these rules may result in your warp access being removed.

### Advertising Your Warp

Once your warp is created, let other players know about it! You can share the warp name in chat or on Discord so customers can use `/warp [warpName]` to teleport directly to your shop.

---