function introduce(name, age) {
    console.log(`Hi, I am ${name}, ${age} years old from ${this.city}.`);
}

const person = {
    city: 'Los Angeles',
};

// const johnIntro = introduce.bind(person, 'John', 26);

// johnIntro();

Function.prototype.myBind = function (context, ...args) {
    if (typeof this !== "function") {
        throw new Error(this + " it's not callable");
    }

    if (!Array.isArray(args)) {
        throw new Error(args + " is not a array");
    }

    // console.log(this);
    // console.log(context);
    // console.log(args);

    context.tempFn = this;
    return (...newAgs) => {
        // this also runs fine 
        // return context.tempFn(...args, ...newAgs);

        return context.tempFn.call(context, ...args, ...newAgs);
    };
}

const johnIntro = introduce.myBind(person, 'John', 26);

johnIntro();