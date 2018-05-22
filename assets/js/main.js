$(document).ready(function(){

  $('.datepicker').datepicker({
    i18n: {
      months: [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ],
      monthsShort: [ 'Jan', 'Fev', 'Mar', 'Abr', 'Mar', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez' ],
      weekdays: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
    },
    format: 'dd/mm'
  });/* end datepicker */
  
});/* end documento ready */

  