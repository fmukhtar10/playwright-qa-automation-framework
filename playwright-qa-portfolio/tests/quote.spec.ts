import {test,expect} from '@playwright/test';
import {QuotePage} from '../pages/QuotePage';
test('creates a valid sample quote',async({page})=>{const quote=new QuotePage(page);await quote.goto();await quote.createQuote('Alex Example','5000');await expect(quote.result).toHaveText('Sample quote created for Alex Example: coverage $5000.00');});
test('rejects coverage below minimum',async({page})=>{const quote=new QuotePage(page);await quote.goto();await quote.name.fill('Alex Example');await quote.amount.fill('999');await quote.submit.click();await expect(quote.amount).toHaveJSProperty('validity.rangeUnderflow',true);await expect(quote.result).toBeEmpty();});
test('requires applicant name',async({page})=>{const quote=new QuotePage(page);await quote.goto();await quote.amount.fill('5000');await quote.submit.click();await expect(quote.name).toHaveJSProperty('validity.valueMissing',true);await expect(quote.result).toBeEmpty();});
