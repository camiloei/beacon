if (typeof params === 'undefined') { return; }
if (typeof variants === 'undefined') { return; }

var result = MessageFormat.format(text, params.product.name, params.charges.amount.formattedAmount, params.dates.endDate, variants.target.emotions.emotion);
output.addText(result);