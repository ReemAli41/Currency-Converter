function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
  
    const exchangeRate = {
      usd: { eur: 0.85, gbp: 0.74, egp: 15.67, jpy: 112.22, cny: 6.39, inr: 74.49, aud: 1.36 },
      eur: { usd: 1.18, gbp: 0.87, egp: 20.10, jpy: 129.58, cny: 7.35, inr: 85.96, aud: 1.58 },
      gbp: { usd: 1.35, eur: 1.15, egp: 18.00, jpy: 150.99, cny: 8.56, inr: 99.74, aud: 1.83 },
      egp: { usd: 0.064, eur: 0.050, gbp: 0.056, jpy: 0.0057, cny: 0.156, inr: 0.067, aud: 0.059 },
      jpy: { usd: 0.0089, eur: 0.0077, gbp: 0.0066, egp: 175.14, cny: 0.057, inr: 0.66, aud: 0.012 },
      cny: { usd: 0.156, eur: 0.136, gbp: 0.117, egp: 6.39, jpy: 17.50, inr: 11.63, aud: 0.18 },
      inr: { usd: 0.013, eur: 0.012, gbp: 0.010, egp: 14.89, jpy: 1.51, cny: 0.086, aud: 0.015 },
      aud: { usd: 0.74, eur: 0.63, gbp: 0.55, egp: 17.51, jpy: 82.67, cny: 5.56, inr: 66.17 },
    };
  
    if (!isNaN(amount)) {
      const convertedAmount = amount * exchangeRate[fromCurrency][toCurrency];
      document.getElementById('result').innerText = `${amount} ${fromCurrency.split(' - ')[0]} = ${convertedAmount.toFixed(2)} ${toCurrency.split(' - ')[0]}`;
    } else {
      document.getElementById('result').innerText = 'Please enter a valid amount.';
    }
  }
  
  function updateIcon(iconId, currencyCode) {
    const iconElement = document.getElementById(iconId);
    switch (currencyCode) {
      case 'usd':
        iconElement.className = 'fab fa-usd';
        break;
      case 'eur':
        iconElement.className = 'fab fa-eur';
        break;
      case 'gbp':
        iconElement.className = 'fab fa-gbp';
        break;
      case 'egp':
        iconElement.className = 'fab fa-egp';
        break;
      case 'jpy':
        iconElement.className = 'fab fa-yen-sign';
        break;
      case 'cny':
        iconElement.className = 'fab fa-yen-sign';
        break;
      case 'inr':
        iconElement.className = 'fab fa-rupee-sign';
        break;
      case 'aud':
        iconElement.className = 'fab fa-australian-dollar-sign';
        break;
      default:
        iconElement.className = 'fab fa-usd';
    }
  }
  