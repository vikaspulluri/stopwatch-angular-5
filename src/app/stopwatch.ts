export class Stopwatch{
	constructor(){
		this.running = false;
		this.reset();
	}

	start(){
		if(!this.time)	this.time = performance.now();
		if(!this.running)	this.running = true;
		requestAnimationFrame(this.run.bind(this));
	}

	run(timestamp){
		if(!this.running)	return;
		this.calculate(timestamp);
		this.time = timestamp;
		this.display();
		requestAnimationFrame(this.run.bind(this))
	}

	calculate(timestamp){
		if(!this.running) return;
		let diff = timestamp - this.time;
		let micro_sec = diff;
		this.times[3] += micro_sec/10;

		//10*micro second ---> 1 second
		if(this.times[3] >= 100){
			this.times[2] += 1;
			this.times[3] -= 100;
		}

		//60 seconds ---> 1 min
		if(this.times[2] >= 60){
			this.times[1] += 1;
			this.times[2] -= 60;
		}

		//60 min ---> 1 hr
		if(this.times[1] >= 60){
			this.times[0] += 1;
			this.times[1] -= 60;
		}
	}

	stop(){
		this.running = false;
		this.time = "";
	}

	reset(){
		this.stop();
		this.empty();
		this.display();
	}

	restart(){
		this.empty();
		this.start();
	}

	empty(){
		this.times = [0,0,0,0];
	}

	display(){
		return  this.times[0] + " : " + this.times[1] + " : " + this.times[2] + " : " + Math.floor(this.times[3]);
	}
}
