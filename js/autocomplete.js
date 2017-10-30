export class Autocomplete {
  constructor(input, options = {}) {
    this.configure(Autocomplete.defaults);
    this.configure(options);

    this.input = input;
    this.isCompleting = false;

    this.completions = document.createElement('div');
    this.completions.classList.add('autocomplete');
    insertAfter(this.input, this.completions);
    this.completions = new SelectionBox(this.completions);

    this.input.addEventListener('focus', e => {
      clearTimeout(this.blurTimer);
    });

    this.input.addEventListener('blur', e => {
      this.blurTimer = setTimeout(_ => this.stopCompleting(), 100);
    });

    this.input.addEventListener('input', e => {
      clearTimeout(this.inputTimer);
      this.inputTimer = setTimeout(_ => {
        if(this.isActionable(e)) {
          if(!this.isCompleting) this.startCompleting();
          this.refreshCompletions()
        } else {
          this.stopCompleting();
        }
      }, 500);
    });

    this.input.addEventListener('keydown', e => {
      let key = whichkey(e);
      if(this.isCompleting) {
        if(key.enter || key.up || key.down) {
          e.preventDefault();
          return false;
        } else if(key.esc) {
          this.stopCompleting();
        }
      }
    });
  }

  configure(options) {
    this.options = Object.assign(this.options || {}, options);
  }

  isActionable(e) {
    return this.options.threshold.call(this, this.input, e);
  }

  startCompleting() {
    this.completions.container.classList.add('open');
    this.completions.focus();
    this.isCompleting = true;
  }

  stopCompleting() {
    this.completions.container.classList.remove('open');
    this.completions.blur();
    this.isCompleting = false;
  }

  refreshCompletions() {
    this.completions.resetItems();

    let callback = (items) => {
      this.isQuerying = false;

      items.forEach(item => {
        let element = this.options.render.call(this, item);
        this.completions.addItem(element, _ => this.applyCompletion(item));
      });
    };

    if(!this.isQuerying) {
      this.isQuerying = true;
      let result = this.options.query.call(this, this.input.value, this.options.source, callback);
      if(result) callback(result);
    }
  }

  applyCompletion(item) {
    this.options.complete.call(this, item);
    this.stopCompleting();
  }
}

Autocomplete.defaults = {

  // ...
  threshold: function(input, e) {
    return input.value.length > 0;
  },

  // ...
  source: [],

  // ...
  query: function(query, source) {
    return source.filter(item => {
      return !!item.toLowerCase().match(query.toLowerCase());
    });
  },

  // ...
  render: function(item) {
    return docment.createTextNode(item);
  },

  // ...
  complete: function(item) {
    this.input.value = item;
  },
};

// variables
var input = document.querySelector('input');
var people = ['john doe', 'maria', 'paul', 'george', 'jimmy'];
var results;

// functions
function autocomplete(val) {
  var people_return = [];

  for (i = 0; i < people.length; i++) {
    if (val === people[i].slice(0, val.length)) {
      people_return.push(people[i]);
    }
  }

  return people_return;
}

// events
input.onkeyup = function(e) {
  input_val = this.value; // updates the variable on each ocurrence

  if (input_val.length > 0) {
    var people_to_show = [];

    autocomplete_results = document.getElementById("autocomplete-results");
    autocomplete_results.innerHTML = '';
    people_to_show = autocomplete(input_val);

    for (i = 0; i < people_to_show.length; i++) {
      autocomplete_results.innerHTML += '<li>' + people_to_show[i] + '</li>';

    }
    autocomplete_results.style.display = 'block';
  } else {
    people_to_show = [];
    autocomplete_results.innerHTML = '';
  }
}
