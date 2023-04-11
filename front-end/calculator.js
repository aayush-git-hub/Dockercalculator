
function calculateSquare() {
  const input = document.getElementById("input").value;
  const data = { number: input };
  $.ajax({
    url: "http://square:8082/square",
    method: "POST",
    data: JSON.stringify(data),
    contentType: "application/json",
    dataType: "json",
    success: function (result) {
      const square = result['result'];
      document.getElementById("result").innerHTML = `The square of ${input} is ${square}.`
    },
    error: function (jqXHR, textStatus) {
      console.error(error)
    }
});
}

function calculateCube() {
  const input = document.getElementById("input").value;
  const data = { number: input };
  $.ajax({
    url: "http://cube:8081/cube",
    method: "POST",
    data: JSON.stringify(data),
    contentType: "application/json",
    dataType: "json",
    success: function (result) {
        const cube = result['result'];
        document.getElementById("result").innerHTML = `The cube of ${input} is ${cube}.`;
    },
    error: function (jqXHR, textStatus) {
      console.error(error)
    }
});
}

function calculateFibonacci() {
  const input = parseInt(document.getElementById("input").value);
  const data = { number: input };
  $.ajax({
    url: "http://fibonacci:8083/fibonacci",
    method: "POST",
    data: JSON.stringify(data),
    contentType: "application/json",
    dataType: "json",
    success: function (result) {
      const fibonacci = result['fibonacci'];
      document.getElementById("result").innerHTML = `The Fibonacci sequence up to ${input} is ${fibonacci}.`;
    },
    error: function (jqXHR, textStatus) {
      console.error(error)
    }
});
}