import { expect, test } from '@playwright/test';

test('palavra chave main page', async ({ page }) => {
  await page.goto('/palavra-chave');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/SEO Starter - Palavra chave/);
});

test('palavra chave state', async ({ page }) => {
  await page.goto('/palavra-chave/sp');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/SEO Starter - Palavra chave - SP/);
});

test('palavra chave city', async ({ page }) => {
  await page.goto('/palavra-chave/sp/sao-paulo');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(
    /SEO Starter - Palavra chave - SP - São Paulo/,
  );
});
