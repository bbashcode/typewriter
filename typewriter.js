const sentence = "hello there from the lighthouse lab";

const typeWriter = function (str){
  let count = 0;
  for (const char of str) {
    setTimeout(() => {
    process.stdout.write(char);  
    }, count);
   count += 50;
  }

  let finalTimeOut = str.length * 50;
  setTimeout(() => {
    process.stdout.write('\n');  
    }, finalTimeOut);
};

console.log(typeWriter(sentence));