if (typeof params === 'undefined') { return; }
if (typeof directive === 'undefined') { return; }

var result = MessageFormat.format(text, params.product.name, params.charges.amount.formattedAmount, directive.target.emotions.emotion);
output.addText(result);