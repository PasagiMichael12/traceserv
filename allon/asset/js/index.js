$(document).ready(() => {
   $('#cardOne').click(() => {
      clickCardChange('#cardOne')
   })
   $('#cardTwo').click(() => {
      clickCardChange('#cardTwo')
   })
   $('#cardThree').click(() => {
      clickCardChange('#cardThree')
   })
   $('#cardFour').click(() => {
      clickCardChange('#cardFour')
   })
   $('#cardFive').click(() => {
      clickCardChange('#cardFive')
   })
   $('#cardSix').click(() => {
      clickCardChange('#cardSix')
   })
   function clickCardChange(value) {
      $(`${value}`).toggleClass('bg-purple-500 text-white')
   }
})
