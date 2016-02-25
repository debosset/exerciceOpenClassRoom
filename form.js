/**
 * Created by adebosset on 25.02.2016.
 */
var form = {

    inputAction: function() {
        // On document ready
        $('input').each(function() {
            form.inputEffect(this);
        });
        // On input Keyup
        $('input').keyup(function() {
            form.inputEffect(this);
        });
        // On input Blur
        $('input').blur(function() {
            form.inputEffect(this);
        });
        // On Change for auto completion for exemple lastpass, google
        $('input').change(function() {
            form.inputEffect(this);
        });
    },

    inputEffect: function(input) {
        if ($(input).val() == '') {
            // Remove the class lactive
            $(input).prev('label').removeClass('lactive');
        } else {
            // Find his label and add class Active to move it up
            $(input).prev('label').addClass('lactive');
        }
    },

    creditCardCheck: function() {

        var inCC = $('#credit-card');

        // Define Max Length
        inCC.attr('maxlength', '19');
        // On input credit-card Keyup
        inCC.keyup(function() {
            form.creditCardFormat(this);
        });
    },

    creditCardFormat: function(cc) {

        if (cc.value == cc.lastValue) return;
        var caretPosition = cc.selectionStart; // Number of characters in the field
        var sanitizedValue = cc.value.replace(/[^0-9]/gi, ''); // Regex no letter allowed
        var parts = []; // Table where with stock xxxx, xxxx, xxxx, xxxx

        // Loop trough value length
        for (var i = 0, len = sanitizedValue.length; i < len; i += 4) {
            parts.push(sanitizedValue.substring(i, i + 4));
            //console.log(sanitizedValue);
        }
        // Loop trough the array
        for (var i = caretPosition - 1; i >= 0; i--) {
            var c = cc.value[i];
            if (c < '0' || c > '9') {
                caretPosition--;
            }
        }
        // To navigate trough the ['xxxx', 'xxxx', 'xxxx', 'xxxx']
        caretPosition += Math.floor(caretPosition / 4);
        cc.value = cc.lastValue = parts.join(' ');
        cc.selectionStart = cc.selectionEnd = caretPosition;

    },

    displayContainer: function() {
        $('.container').addClass('animated fadeInUp');
    },

    initialize: function() {
        $(document).ready(function() {
            form.inputAction();
            form.creditCardCheck();
            form.displayContainer();
        });
    } // End initialize

}; // End form

// Initialize our form
form.initialize();