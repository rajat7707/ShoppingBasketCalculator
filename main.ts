type Item = "Apple" | "Banana" | "Melon" | "Lime";

const prices: Record<Item, number> = {
  Apple: 35,
  Banana: 20,
  Melon: 50,
  Lime: 15
};

function calculateBasket(): void {
  const input = (document.getElementById("items") as HTMLInputElement).value;
  const items = input.split(",").map(item => item.trim()) as Item[];

  const itemCount: Record<Item, number> = {
    Apple: 0,
    Banana: 0,
    Melon: 0,
    Lime: 0
  };

  for (const item of items) {
    if (item in itemCount) {
      itemCount[item]++;
    }
  }

  let total = 0;
  total += itemCount.Apple * prices.Apple;
  total += itemCount.Banana * prices.Banana;
  total += (Math.floor(itemCount.Melon / 2) + (itemCount.Melon % 2)) * prices.Melon;
  total += (Math.floor(itemCount.Lime / 3) * 2 + (itemCount.Lime % 3)) * prices.Lime;

  const totalEl = document.getElementById("total");
  if (totalEl) {
    totalEl.textContent = `£${(total / 100).toFixed(2)}`;
  }
}

// Make the function available globally for HTML to use
(window as any).calculateBasket = calculateBasket;
