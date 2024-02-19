import { expect, test } from '@playwright/test';

test('home has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/SEO Starter/);
});

test('home has link to palavra-chave', async ({ page }) => {
  await page.goto('/');

  await page.getByText('Palavra Chave').click();
  await expect(page).toHaveURL(/palavra-chave/);
});

test('home has link to carros', async ({ page }) => {
  await page.goto('/');

  await page.getByText('Carros').click();
  await expect(page).toHaveURL(/carros/);
});

test('home has link to motos', async ({ page }) => {
  await page.goto('/');

  await page.getByText('motos').click();
  await expect(page).toHaveURL(/motos/);
});

test('home has link to barcos', async ({ page }) => {
  await page.goto('/');

  await page.getByText('Barcos').click();
  await expect(page).toHaveURL(/barcos/);
});
