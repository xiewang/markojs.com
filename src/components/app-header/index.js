module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),
    init: function() {
        this.searchExpanded = false;
    },
    handleToggleSearchClick: function() {
        var expandedClass = 'search-input--expanded';
        var input = document.getElementsByClassName('search-input')[0];
        this.searchExpanded = !this.searchExpanded;
        if (this.searchExpanded) {
            input.classList.add(expandedClass);
            input.focus();
        } else {
            input.classList.remove(expandedClass);
        }
    },
    handleSearch: function() {
        this.getEl('word').value = this.getEl('word1').value + ' ' + this.getEl('word').value;
        this.getEl('form').submit();
    }
});