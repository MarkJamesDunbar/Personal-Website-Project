<!DOCTYPE html>
<html>
<head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script type="text/javascript" src="src/tagcloud.jquery.js"></script>
</head>
<body>

<div class="tagBall">
  <a class="tag" target="_blank" href="#">item1</a>
  <a class="tag" target="_blank" href="#">item2</a>
  <a class="tag" target="_blank" href="#">item1</a>
  <a class="tag" target="_blank" href="#">item2</a>
  <a class="tag" target="_blank" href="#">item1</a>
  <a class="tag" target="_blank" href="#">item2</a>
  <a class="tag" target="_blank" href="#">item1</a>
  <a class="tag" target="_blank" href="#">item2</a>
  <a class="tag" target="_blank" href="#">item1</a>
  <a class="tag" target="_blank" href="#">item2</a>
  <a class="tag" target="_blank" href="#">item1</a>
  <a class="tag" target="_blank" href="#">item2</a>
</div>

<script type="text/javascript">
  var settings = {
    //height of sphere container
    height: 400,
    //width of sphere container
    width: 400,
    //radius of sphere
    radius: 150,
    //rotation speed
    speed: 3,
    //sphere rotations slower
    slower: 0.9,
    //delay between up<a href="https://www.jqueryscript.net/time-clock/">date</a> position
    timer: 5,
    //dependence of a font size on axis Z
    fontMultiplier: 15,
    //tag css stylies on mouse over
    hoverStyle: {
      border: 'none',
      color: '#0b2e6f'
    },
    //tag css stylies on mouse out
    mouseOutStyle: {
      border: '',
      color: ''
    }
  };

  $(document).ready(function () {
    $('#tagcloud').tagoSphere(settings);
  });
</script>

</body>
</html>