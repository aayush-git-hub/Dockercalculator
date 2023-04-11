from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def fibonacci(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)

@app.route('/fibonacci', methods=['POST'])
def get_fibonacci():
    data = request.get_json()
    n = int(data['number'])
    fib = fibonacci(n)
    return jsonify({'fibonacci': fib})

if __name__ == '__main__':
    app.run(port=8083)
    app.run(debug = True,host = '0.0.0.0')
