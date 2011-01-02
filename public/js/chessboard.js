var initializeBoard = function() {
  $("#a2 > .piece").addClass('white-pawn');
  $("#b2 > .piece").addClass('white-pawn');
  $("#c2 > .piece").addClass('white-pawn');
  $("#d2 > .piece").addClass('white-pawn');
  $("#e2 > .piece").addClass('white-pawn');
  $("#f2 > .piece").addClass('white-pawn');
  $("#g2 > .piece").addClass('white-pawn');
  $("#h2 > .piece").addClass('white-pawn');
  $("#a1 > .piece").addClass('white-rook');
  $("#h1 > .piece").addClass('white-rook');
  $("#b1 > .piece").addClass('white-knight');
  $("#g1 > .piece").addClass('white-knight');
  $("#c1 > .piece").addClass('white-bishop');
  $("#f1 > .piece").addClass('white-bishop');
  $("#d1 > .piece").addClass('white-queen');
  $("#e1 > .piece").addClass('white-king');
  $("#a7 > .piece").addClass('black-pawn');
  $("#b7 > .piece").addClass('black-pawn');
  $("#c7 > .piece").addClass('black-pawn');
  $("#d7 > .piece").addClass('black-pawn');
  $("#e7 > .piece").addClass('black-pawn');
  $("#f7 > .piece").addClass('black-pawn');
  $("#g7 > .piece").addClass('black-pawn');
  $("#h7 > .piece").addClass('black-pawn');
  $("#a8 > .piece").addClass('black-rook');
  $("#h8 > .piece").addClass('black-rook');
  $("#b8 > .piece").addClass('black-knight');
  $("#g8 > .piece").addClass('black-knight');
  $("#c8 > .piece").addClass('black-bishop');
  $("#f8 > .piece").addClass('black-bishop');
  $("#d8 > .piece").addClass('black-queen');
  $("#e8 > .piece").addClass('black-king');
  chess.load('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
}

var movePiece = function(from, to) {
  var newClass = $('#' + from + ' > .piece').attr('class').replace('piece ', '');
  $('#' + from + ' > .piece').removeClass(newClass);
  $('#' + to + ' > .piece').addClass(newClass);
}
