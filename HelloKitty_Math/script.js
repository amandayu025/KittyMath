function add(val){
    document.getElementById("display").value+=val;
}
function clearDisplay(){
    document.getElementById("display").value="";
}
function calculate(){
    document.getElementById("display").value=eval(document.getElementById("display").value)
}
var n=0;
function change(){
    var ballon= document.getElementById("ballon");
    ballon.innerHTML=c1d[n];
    if(n<c1d.length-1){
        n++;
    }
}
var c1d=["Mmm… what—","I was sleeping, you see. But now—boing!—my eyes are open, and everything exists again all at once.","And that reminds me of something very important.", "Numbers.","Yes. I just woke up, and already I am thinking about numbers. This is because I am extremely intelligent.","Now, where was I… ah, yes. Numbers are how we understand how many things there are—like how many naps I have taken (many), or how many I will take (also many, but in the future, which is exciting).","Let us begin properly.", "You think numbers are just… things humans say when they count snacks. “One, two, three.” But no. Numbers are how we understand how many somethings exist. Like how many times I’ve tried to catch my tail today. (It’s a big number. Impressive, really.)","Let me explain.","When I have one ball of yarn, that means there is only a single, lonely, beautiful ball. Just one. I can stare at it. I can pounce on it. It is my entire universe.","But if I find two balls of yarn? Ah! Now things change. Two means more than one. It means choices. It means I can ignore one ball… and then immediately want the other one.","Then comes three. Three is exciting. Three is chaos. Three is when I try to chase all of them at once and fall over dramatically. Three means the world is getting bigger.","So numbers… they are names for “how many.” They help us keep track of things: toys, naps, snacks, and important life events, like how many naps I took only today.","(Also a big number. I am very productive.)","And the numbers don’t stop. They keep going forever. You can always add one more. Like… if I have four treats, and then I find another treat—because I will—now I have five. There is always more. Always another number waiting.","Numbers are like steps. Each one takes you further. From one… to two… to three… all the way to… well, as many as there are stars in the sky. Or crumbs under the couch.","So when you count, you are doing something very powerful. You are naming the size of the world.","Now if you’ll excuse me, I must go do something REALLY important, take a nap.","Zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"];

