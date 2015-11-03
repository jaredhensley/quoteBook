angular.module('quoteBook').service('mainService', function () {
  this.data = [
    {
      text: 'Life isn\'t about getting and having, it\'s about giving and being.',
      author: 'Kevin Kruse'
    },
    {
      text: 'Whatever the mind of man can conceive and believe, it can achieve',
      author: 'Napoleon Hill'
    },
    {
      text: 'Strive not to be a success, but rather to be of value.',
      author: 'Albert Einstein'
    },
    {
      text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.',
      author: 'Robert Frost'
    },
    {
      text: 'The most difficult thing is the decision to act, the rest is merely tenacity.',
      author: 'Amelia Earhart'
    },
    {
      text: 'Life is what happens to you while you\'re busy making other plans.',
      author: 'John Lennon'
    },
    {
      text: 'What even is a jQuery?',
      author: 'Tyler S. McGinnis'
    }
  ]

  this.getData = function () {
    return data;
  }

  this.addData = function (obj) {
    if (obj.hasOwnProperty('text') && obj.hasOwnProperty('author')) {
      this.data.push(obj);
    }
  }

  this.removeData = function (text) {

    for (var i = this.data.length - 1; i >= 0; i--) {
      if (this.data[i].text === text || this.data[i].author === text) {
        this.data.splice(i, 1);
      }
    }

  }

});