const cojoin = (flockX, flockY) => flockX + flockY;

const breed = (flockX, flockY) => flockX * flockY;

const flockA = 4,
  flockB = 2,
  flockC = 0;

const result = cojoin(breed(flockB, cojoin(flockA, flockC)), breed(flockA, flockB));

console.log(result);

/* Example of Object Oriented

    var conjoin = function(flock_x, flock_y) { return flock_x + flock_y; };
    var breed = function(flock_x, flock_y) { return flock_x * flock_y; };

    var flock_a = 4;
    var flock_b = 2;
    var flock_c = 0;

    var result = conjoin(
    breed(flock_b, conjoin(flock_a, flock_c)), breed(flock_a, flock_b)
    );
*/

/* Example of Object Oriented
    var Flock = function(n) {
    this.seagulls = n;
    };

    Flock.prototype.conjoin = function(other) {
    this.seagulls += other.seagulls;
    return this;
    };

    Flock.prototype.breed = function(other) {
    this.seagulls = this.seagulls * other.seagulls;
    return this;
    };

    var flock_a = new Flock(4);
    var flock_b = new Flock(2);
    var flock_c = new Flock(0);

    var result = flock_a.conjoin(flock_c)
        .breed(flock_b).conjoin(flock_a.breed(flock_b)).seagulls;
*/
