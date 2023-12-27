var KTPosSystem = function () {
    var t, e = wNumb({
        mark: ".",
        thousand: ",",
        decimals: 2,
        prefix: "$"
    });

    var n = function () {
        var items = document.querySelectorAll('[data-kt-pos-element="item"] [data-kt-dialer="true"]');
        if (items.length > 0) {
            items.forEach(function (item) {
                var dialer = KTDialer.getInstance(item);
                dialer.on("kt.dialer.changed", function () {
                    var value = parseInt(dialer.getValue()),
                        parent = dialer.getElement().closest('[data-kt-pos-element="item"]'),
                        price = parseInt(parent.getAttribute("data-kt-pos-item-price")),
                        total = value * price;
                    
                    var itemTotal = parent.querySelector('[data-kt-pos-element="item-total"]');
                    if (itemTotal) {
                        itemTotal.innerHTML = e.to(total);
                    }
                    
                    // Update total and grand total
                    (function () {
                        var totals = document.querySelectorAll('[data-kt-pos-element="item-total"]'),
                            sum = 0,
                            grandTotal = 0;
                        
                        totals.forEach(function (el) {
                            sum += e.from(el.innerHTML);
                        });
                        
                        grandTotal = sum - 8 + 0.96;
                        var totalElement = t.querySelector('[data-kt-pos-element="total"]');
                        var grandTotalElement = t.querySelector('[data-kt-pos-element="grant-total"]');
                        if (totalElement && grandTotalElement) {
                            totalElement.innerHTML = e.to(sum);
                            grandTotalElement.innerHTML = e.to(grandTotal);
                        }
                    })();
                });
            });
        }
    };

    return {
        init: function () {
            t = document.querySelector("#kt_pos_form");
            if (t) {
                n();
            }
        }
    };
}();

document.addEventListener("DOMContentLoaded", function () {
    KTPosSystem.init();
});
