let ar = 1 / 1;
let pix = 2;
let pixt
let pg;
let xoff = 0
let c
let particles = []
let particles2 = []
let particles3 = []
let particles4 = []
let particles5 = []
let particles6 = []
let colors = []
let r, g, b
let mult = 0.002
let iMult
let tauMult
let compC
let angle, angle2, angle3, angle4, angle5, angle6
let w = 1000
let h
let s
let bf1, bf2, shBuf
let sh
let seed = 999999 * fxrand()
let endFrame
let vecRand
let c1, c2, c3
let e = 75
let colorPals
let frRate
let middleE
let midOrient
let midInstance
let min1, min2, min3
let sqType, sqType2, sqCount
let index
let bandX, bandY

let edge = 100
let aX
let aY
let bX
let bY
let cX
let cY
let rad, rad2, rad3
let aR, aG, aB, bR, bG, bB, cR, cG, cB
let aR2, aG2, aB2, bR2, bG2, bB2, cR2, cG2, cB2
let aR3, aG3, aB3, bR3, bG3, bB3, cR3, cG3, cB3
let frameC, frameSpace, frameCou

let movRad
let movRad2
let movRad3
let movRad4
let movRad5
let swRandPos
let swRandWidth
let fullSw
let swRand
let swChooser
let swOrient
let spOrientX, spOrientY

let colPlacement
let satMov
let briMov
let mov = 0
let eArX
let eArY
let bgCol, bgCh

let circleDrift
let shaDur = 38
let sw = 1
let sw1 = 1,
  sw2 = 1,
  sw3 = 1

let sha = true;

let shaType

let eliX, eliY, eliS
let freq
let modStart = 75
let lineC, alphaC
let nC

console.log(seed)

function preload() {


  // seed = 563834.8689175341



  sh = loadShader("pix.vert", "pix.frag");

}

function setup() {

  h = w * ar

  c = createCanvas(w, h);
  pixelDensity(pix);
  // colorMode(HSB, 360, 100, 100, 1);

  pg = createGraphics(w, h);
  pg.pixelDensity(pix);
  pg.colorMode(HSB, 360, 100, 100, 1);
  pg.rectMode(CENTER)
  pg.imageMode(CENTER)

  bf1 = createGraphics(w, h);
  bf2 = createGraphics(w, h);
  shBuf = createGraphics(w, h, WEBGL);
  bf1.pixelDensity(pix);
  bf2.pixelDensity(pix);
  shBuf.pixelDensity(pix);
  colorMode(HSB, 360, 100, 100, 1);

  // colorMode(RGB);

  bf1.noStroke()
  bf2.noStroke()

  // bf1.rectMode(CENTER)
  // bf2.rectMode(CENTER)

  randomSeed(seed)
  noiseSeed(seed)

  // let blendM = random([0.0, 0.0, 0.0, 0.0, 1.0, 0.0])

  // if (blendM == 1.0) {
  //   blendMode(HARD_LIGHT)
  // }

  bgCh = random([0.0, 1.0, 1.0, 1.0])


  if (bgCh == 0.0) {
    bgCol = color(20, 10, 10)
  } else {
    bgCol = color(20, 10, 87)
  }


  background(bgCol)
  pg.background(bgCol)


  shaType = random([0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 2.0, 2.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0, 1.0])



  vecRand = random(1)


  fr = 60
  frameRate(fr)



  colorPalettes()




  colPlacement = random([1, 2, 3])

  satMov = random([-1, 1])
  briMov = random([-1, 1])


  e = random([75, 50, 75, 75, 50, 75, 75, 75])



  swChooser = random([true, false, false, false, false, false, false])


  let noiseType = random([1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0])




  let nNoiType = random([0.0, 1.0])


  sha = random([true, false, true, true, true, true, true, true, false])



  midOrient = random([0.0, 1.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 0.0, 1.0])


  if (sha == false) noiseType = 0.0, e = random([50, 25, 50, 50, 25, 50, 50, 50])


  if (noiseType == 0.0) { ///düz
    eArX = random([1.0, 2.0, 3.0, 3.0, 2.0, 1.0, 3.0, 3.0, 3.0, 2.0])
    eArY = random([1.0, 2.0, 3.0, 3.0, 2.0, 1.0, 3.0, 3.0, 3.0, 2.0])

    vecRand = random([1.0, 1.0, 0.0, 2.0, 4.0, 4.0, 5.0, 5.0, 1.0, 1.0, 0.0, 0.0, 2.0, 2.0])
  } else { ///////yuvarlak
    eArX = random([1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 3.0, 3.0, 1.0, 1.0])
    eArY = random([1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 3.0, 3.0, 1.0, 1.0])
    if (eArX !== 1.0 || eArY !== 1.0) {
      vecRand = random([0.0, 0.0, 2.0, 2.0, 3.0, 3.0, 0.0, 0.0, 2.0, 2.0, 0.0, 0.0])
    } else {
      vecRand = random([0.0, 0.0, 2.0, 2.0, 2.0, 2.0])
    }
  }
  lineC = random([0.0, 1.0])



  if (sha == false) { ////////////////////////////////////////////////////////////////

    noiseType = 0.0
    if (noiseType == 0.0) { ///düz
      vecRand = random([0.0, 1.0, 4.0, 0.0, 0.0, 2.0])
    } else { ///////yuvarlak
      vecRand = 0.0
    }

    if (vecRand == 0.0 || vecRand == 4.0) {
      // eArX = 1.0
      // eArY = 1.0
    }

    if (vecRand == 1.0 || vecRand == 2.0) {
      swChooser = true
    }

    midOrient = 3.0

  }



  if (vecRand == 4.0) {
    swChooser = false
  }

  let count

  count = random([8, 10, 6, 6, 6, 5, 10, 8, 6, 10, 8, 8, 8, 8, 10, 6, 10, 5]) * 1

  if (eArX == 3.0 && eArY == 3.0) count = random([8, 10, 10, 8, 10, 8, 8, 8, 8, 10, 10])


  if (vecRand == 3.0) {
    let cMult = 1
    if (eArX == 3.0 && eArY == 3.0) cMult = 2
    count = random([5, 6]) * cMult
    swChooser = false

  }

  if (vecRand == 0.0) {
    count = int(random([8, 10, 6, 6, 6, 5, 10, 8, 6, 10, 8, 8, 8, 8, 10, 6, 10, 5]) * 1.5)
  }

  if (noiseType == 0) {
    let hei = height / 4
    let spa = 100

    for (let i = 0; i < 4; i++) {

      if (nNoiType == 0.0) {
        for (let x = 0; x <= width; x += 0.5) {
          let n = map(random(1), 0, 1, -hei, hei)
          let y = height / 6 + i * spa + n;
          let h = createVector(x, y)
          particles.push(h)
        }

        for (let x = 0; x <= width; x += 0.5) {
          let n = map(random(1), 0, 1, -hei, hei)
          let y = height / 2.4 + i * spa + n;
          let h = createVector(x, y)
          particles2.push(h)
        }

        for (let x = 0; x <= width; x += 0.5) {
          let n = map(random(1), 0, 1, -hei, hei)
          let y = height / 1.5 + i * spa + n;
          let h = createVector(x, y)
          particles3.push(h)
        }
      } else {
        for (let y = 0; y <= height; y += 0.5) {
          // for (let y = height/4; y <= height; y += height / 4) {

          let n = map(random(1), 0, 1, -hei, hei)
          let x = width / 6 + i * spa + n;
          let h = createVector(x, y)
          particles.push(h)

        }
        for (let y = 0; y <= height; y += 0.5) {
          // for (let y = height/2; y <= height; y += height / 4) {

          let n = map(random(1), 0, 1, -hei, hei)
          let x = width / 2.4 + i * spa + n;
          let h = createVector(x, y)
          particles2.push(h)

        }
        for (let y = 0; y <= height; y += 0.5) {
          // for (let y = height/1.333; y <= height; y += height / 4) {

          let n = map(random(1), 0, 1, -hei, hei)
          let x = width / 1.5 + i * spa + n;
          let h = createVector(x, y)
          particles3.push(h)
        }
      }
    }

  } else {
    for (let i = 0; i < count; i++) {
      edge = 100
      aX = random(edge, width - edge)
      aY = random(edge, height - edge)
      bX = random(edge, width - edge)
      bY = random(edge, height - edge)
      cX = random(edge, width - edge)
      cY = random(edge, height - edge)

      rad = random(100, 300)

      for (let a = 0; a <= TAU; a += 0.01) {
        let x = aX + cos(a) * rad
        let y = aY + sin(a) * rad
        let h = createVector(x, y)
        particles.push(h)

      }


      rad2 = random(100, 300)

      for (let a = 0; a <= TAU; a += 0.01) {
        let x = bX + cos(a) * rad2
        let y = bY + sin(a) * rad2
        let h = createVector(x, y)
        particles2.push(h)

      }

      rad3 = random(100, 300)

      for (let a = 0; a <= TAU; a += 0.01) {
        let x = cX + cos(a) * rad3
        let y = cY + sin(a) * rad3
        let h = createVector(x, y)
        particles3.push(h)
      }
    }
  }



  let sty = random([0.0, 0.0, 0.0, 1.0])
  let speed = random([1., 1., 1., 1., 2., 2., 3., 1., 2., 3.])
  let gli = random([0.0, 0.0, 0.0, 1.0])
  let rare = random([0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0])

  if (shaType == 1.0) {
    sty = 0.0
  }

  if (sty == 1.0) {
    gli = 0.0
  }

  if (shaType == 2.0) {
    gli = 1.0
  }



  if (sty == 1.0) speed = 2.0
  pixt = 1.0

  console.log("vecRand: " + vecRand)
  console.log("shaType: " + shaType)
  console.log("sty: " + sty)
  console.log("speed: " + speed)
  console.log("gli :" + gli)
  console.log("rare: " + rare)



  shBuf.shader(sh)

  sh.setUniform('resolution', [width * pix, height * pix])
  sh.setUniform('pix', pix)
  sh.setUniform('pixDiv', pixt)
  sh.setUniform('pg', bf1)
  sh.setUniform('pg2', bf2)
  sh.setUniform('img', pg)
  sh.setUniform('u_speed', speed)
  sh.setUniform('u_gli', gli)
  sh.setUniform('u_sty', sty)
  sh.setUniform('u_rare', rare)











  sqType = random([0.0, 1.0])
  sqType2 = random([0.0, 1.0])



  sqCount = 0.0 //random([0.0, 1.0])






  if (vecRand == 0.0) {
    endFrame = 800
    if (noiseType == 0.0) {
      s = random([25, 25, 50, 50, 50])
      mult = random(0.0072, 0.015)
      iMult = random(50, 120)
      tauMult = random(5, 18)
    } else {
      s = random([100, 100, 25, 25, 50, 50, 50])
      mult = random(0.0072, 0.015)
      iMult = random(10, 60)
      tauMult = random(8, 18)
    }

  } else if (vecRand == 1.0) {
    s = random([100, 100, 25, 25, 50, 50, 50])
    endFrame = 600
    mult = random(0.007, 0.05)
    iMult = random(0.01, 100)
    tauMult = random(5, 25)

  } else if (vecRand == 2.0) {
    endFrame = 600
    if (noiseType == 0.0) {
      s = random([100, 100, 25, 25, 50, 50, 50])
      mult = random(0.01, 0.05) ////Duz
      iMult = random(0.01, 200)
      tauMult = random(15, 25)
    } else {
      s = random([100, 100, 25, 25, 50, 50, 50])
      mult = random(0.007, 0.04) ///////Daire
      iMult = random(1, 200)
      tauMult = random(20, 25)
    }
  } else if (vecRand == 3.0) {
    endFrame = 900
    s = random([25, 25, 50, 50, 50])
    mult = random(0.007, 0.01)
    iMult = random(1, 200)
    tauMult = random(10, 20)
  } else if (vecRand == 4.0) {
    s = random([100, 100, 25, 25, 50, 50, 50])
    endFrame = 600
    mult = random(0.007, 0.05)
    iMult = random(0.01, 200)
    tauMult = random(5, 25)
  } else if (vecRand == 5.0) {
    s = random([100, 100, 25, 25, 50, 50, 50])
    endFrame = 600
    mult = random(0.007, 0.05)
    iMult = random(0.01, 200)
    tauMult = random(5, 25)
  }


  if (s == 25) sqCount = 1.0





  if (swChooser) {
    swRand = random([20, 60, 30, 50])
  } else {
    swRand = 0
  }


  swRandWidth = (width * -2)
  swRandPos = random([300, 400, 500, 600, 700, 400, 500, 500, 600])

  swOrient = random([1.0, 0.0])



  frRate = random([5.0, 5.0, 2.0])

  spOrientX = random([-1, 1])
  spOrientY = random([-1, 1])






  midInstance = random([0.0, 1.0, 3.0, 0.0, 1.0])


  if (vecRand == 3.0) {
    midOrient = random([0, 1])
  }




  min1 = random([-1, 1])
  min2 = random([-1, 1])
  min3 = random([-1, 1])


  if (vecRand == 5.0) {
    if (min1 == min2) { ////Sol
      if (random(1) < 0.5) {
        spOrientX = -1
        spOrientY = 1
      } else {
        spOrientX = 1
        spOrientY = -1
      }
    } else { ///Sağ
      if (random(1) < 0.5) {
        spOrientX = 1
        spOrientY = 1
      } else {
        spOrientX = -1
        spOrientY = -1
      }
    }
  }

  if (vecRand == 2.0) {
    if (min1 == min2) {
      if (min1 == -1) {
        if (random(1) < 0.5) {
          spOrientX = 1
          spOrientY = 1
        } else {
          spOrientX = -1
          spOrientY = -1
        }
      } else {
        if (random(1) < 0.5) {
          spOrientX = -1
          spOrientY = 1
        } else {
          spOrientX = 1
          spOrientY = -1
        }
      }
    } else if (min1 == min3) {
      if (min1 == -1) {
        if (random(1) < 0.5) {
          spOrientX = 1
          spOrientY = 1
        } else {
          spOrientX = -1
          spOrientY = -1
        }
      } else {
        if (random(1) < 0.5) {
          spOrientX = -1
          spOrientY = 1
        } else {
          spOrientX = 1
          spOrientY = -1
        }
      }

    } else if (min2 == min3) {
      if (min2 == -1) {
        if (random(1) < 0.5) {
          spOrientX = 1
          spOrientY = 1
        } else {
          spOrientX = -1
          spOrientY = -1
        }
      } else {
        if (random(1) < 0.5) {
          spOrientX = -1
          spOrientY = 1
        } else {
          spOrientX = 1
          spOrientY = -1
        }
      }
    }

  }








  bandX = width / 2
  bandY = height / 2



  if (midOrient == 0.0) {
    bandX = width / 2
    bandY = random([height / 2, height / 2.75, height / 2.5, height / 2.25, height / 2.0, height / 1.75, height / 1.5, height / 2])
  } else {
    bandX = random([width / 2, width / 2.75, width / 2.5, width / 2.25, width / 2.0, width / 1.75, width / 1.5, width / 2])
    bandY = height / 2

  }

  eliX = random(e * 2, width - e * 2)
  eliY = random(e * 2, height - e * 2)


  eliS = 1

  if (eArX == 1.0 && eArY == 1.0 && vecRand == 0.0) {
    eliS = min(width, height) / random(2, 8)
  }

  if (midOrient !== 3.0 || s == 25) {
    eliS = 1
  }


  freq = random([100.0, 200.0, 50.0, 100.0])

  if (vecRand == 1.0 || vecRand == 4.0) modStart = 200

  alphaC = random([0.0, 0.0, 0.0, 1.0])

  // nC = random([1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0,1.0 ])
  nC = random([1.0, 1.0, random([2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 2.0, 2.0]), 1.0])

}

function draw() {

  // bf1.fill(0)
  // bf1.ellipse(eliX, eliY, eliS)

  let x = (random(w / s) ^ (frameCount / s)) * s
  let y = (random(h / s) ^ (frameCount / s)) * s

  let x1 = (random(w / s) ^ (frameCount / s)) * s
  let y1 = (random(h / s) ^ (frameCount / s)) * s


  let d = dist(eliX, eliY, x, y)
  let d1 = dist(eliX, eliY, x1, y1)




  let r = random([0, 255])
  let g = random([0, 255])
  let b = random([0, 255])

  // let r = random(0, 255)
  // let g = random(0, 255)
  // let b = random(0, 255)


  let posb = true
  let posb1 = true



  if (midOrient == 0.0) {
    if (midInstance == 0.0) {
      posb = y <= bandY //- (s / 2) //- (e / 2) // //(e / 2)
      posb1 = y1 <= bandY //- (s / 2)
    } else if (midInstance == 1.0) {
      posb = y >= bandY //+ (s / 2) //+ (e / 2) //+ (s / 2) //+ (e / 2)
      posb1 = y1 >= bandY //+ (s / 2)
    } else if (midInstance == 3.0) {
      posb = true
    }
    if (eArY == 3.0 && bandY == height / 1.5 && e == 75) {
      posb = y >= bandY
      posb1 = y1 >= bandY
    }
  } else if (midOrient == 1.0) {
    if (midInstance == 0.0) {
      posb = x <= bandX //- (s / 2) //- (e / 2) //- (s / 2)
      posb1 = x1 <= bandX //- (s / 2)
    } else if (midInstance == 1.0) {
      posb = x >= bandX //+ (s / 2)
      posb1 = x1 >= bandX //+ (s / 2)
    } else if (midInstance == 3.0) {
      posb = true
    }
    if (eArX == 3 && bandX == width / 1.5 && e == 75) {
      posb = x >= bandX
      posb1 = x1 >= bandX
    }
  } else {
    posb = true
  }

  if (posb) {

    if (d > eliS / 1.5) {
      bf1.fill(r, g, b)
      if (sqType == 1.0) bf1.rect(x, y, s * 1.25)
      bf1.rect(x, y, s)


      bf2.fill(random([0, 255]), random([0, 255]), random([0, 255]))
      if (sqType2 == 1.0) bf2.rect(x, y, s * 1.25)
      bf2.rect(x, y, s)

    }
    // }


    // if (posb1) {
    if (d1 > eliS / 1.5) {
      bf1.fill(r, g, b)

      if (sqCount == 1.0) {
        if (sqType == 1.0) bf1.rect(x1, y1, s * 1.25)
        bf1.rect(x1, y1, s)
      }

      bf2.fill(random([0, 255]), random([0, 255]), random([0, 255]))
      if (posb1) {
        if (sqCount == 1.0) {
          if (sqType2 == 1.0) bf2.rect(x1, y1, s * 1.25)
          bf2.rect(x1, y1, s)
        }
      }
    }
  }











  for (let i = 0; i < particles.length; i++) {

    if (nC == 1.0) {
      angle = map(noise(particles[i].x * mult, particles[i].y * mult), 0, 1, 0, TAU ^ frameCount)
      angle2 = map(noise(particles2[i].x * mult, particles2[i].y * mult), 0, 1, 0, TAU ^ frameCount)
      angle3 = map(noise(particles3[i].x * mult, particles3[i].y * mult), 0, 1, 0, TAU ^ frameCount)
    } else if (nC == 2.0) {
      angle = map(noise(particles[i].x * mult ^ particles[i].y * mult), 0, 1, 0, TAU ^ frameCount)
      angle2 = map(noise(particles2[i].x * mult ^ particles2[i].y * mult), 0, 1, 0, TAU ^ frameCount)
      angle3 = map(noise(particles3[i].x * mult ^ particles3[i].y * mult), 0, 1, 0, TAU ^ frameCount)
    } else if (nC == 3.0) {

      angle = map(noise(particles[i].x * mult + particles[i].y * mult), 0, 1, 0, TAU ^ frameCount)
      angle2 = map(noise(particles2[i].x * mult + particles2[i].y * mult), 0, 1, 0, TAU ^ frameCount)
      angle3 = map(noise(particles3[i].x * mult + particles3[i].y * mult), 0, 1, 0, TAU ^ frameCount)
    } else if (nC == 4.0) {
      ///////////////////////Bazı boyamalarla cok iyi
      angle = map(sin(particles[i].x * mult, particles[i].y * mult), 0, 1, 0, TAU ^ frameCount)
      angle2 = map(sin(particles2[i].x * mult, particles2[i].y * mult), 0, 1, 0, TAU ^ frameCount)
      angle3 = map(sin(particles3[i].x * mult, particles3[i].y * mult), 0, 1, 0, TAU ^ frameCount)
    } else if (nC == 5.0) {
      angle = map(sin(particles[i].x * mult + particles[i].y * mult), 0, 1, 0, TAU ^ frameCount)
      angle2 = map(sin(particles2[i].x * mult + particles2[i].y * mult), 0, 1, 0, TAU ^ frameCount)
      angle3 = map(sin(particles3[i].x * mult + particles3[i].y * mult), 0, 1, 0, TAU ^ frameCount)
    } else if (nC == 6.0) {
      angle = map(sin(particles[i].x * mult - particles[i].y * mult), 0, 1, 0, TAU ^ frameCount)
      angle2 = map(sin(particles2[i].x * mult - particles2[i].y * mult), 0, 1, 0, TAU ^ frameCount)
      angle3 = map(sin(particles3[i].x * mult - particles3[i].y * mult), 0, 1, 0, TAU ^ frameCount)
    } else if (nC == 7.0) {

      ///////////////////////Bazı boyamalarla cok iyi
      angle = map(tan(particles[i].x * mult, particles[i].y * mult), 0, 1, 0, TAU ^ frameCount)
      angle2 = map(tan(particles2[i].x * mult, particles2[i].y * mult), 0, 1, 0, TAU ^ frameCount)
      angle3 = map(tan(particles3[i].x * mult, particles3[i].y * mult), 0, 1, 0, TAU ^ frameCount)
    } else if (nC == 8.0) {
      angle = map(tan(particles[i].x * mult + particles[i].y * mult), 0, 1, 0, TAU ^ frameCount)
      angle2 = map(tan(particles2[i].x * mult + particles2[i].y * mult), 0, 1, 0, TAU ^ frameCount)
      angle3 = map(tan(particles3[i].x * mult + particles3[i].y * mult), 0, 1, 0, TAU ^ frameCount)
    } else if (nC == 9.0) {

      angle = map(tan(particles[i].x * mult - particles[i].y * mult), 0, 1, 0, TAU ^ frameCount)
      angle2 = map(tan(particles2[i].x * mult - particles2[i].y * mult), 0, 1, 0, TAU ^ frameCount)
      angle3 = map(tan(particles3[i].x * mult - particles3[i].y * mult), 0, 1, 0, TAU ^ frameCount)
    }







    ////Daire noise ya da caprazlılarla güzel
    // angle = map(atan(particles[i].x * mult, particles[i].y * mult), 0, 1, 0, TAU ^ frameCount)
    // angle2 = map(atan(particles2[i].x * mult, particles2[i].y * mult), 0, 1, 0, TAU ^ frameCount)
    // angle3 = map(atan(particles3[i].x * mult, particles3[i].y * mult), 0, 1, 0, TAU ^ frameCount)





    angle /= (frameCount + modStart) / TAU / tauMult ^ noise(particles[i].x * mult, particles[i].y * mult)
    angle2 /= (frameCount + modStart) / TAU / tauMult ^ noise(particles2[i].x * mult, particles2[i].y * mult)
    angle3 /= (frameCount + modStart) / TAU / tauMult ^ noise(particles3[i].x * mult, particles3[i].y * mult)








    if (vecRand == 0.0) {
      vec = createVector(sin(angle + i / iMult), cos(angle + i / iMult))
      vec2 = createVector(sin(angle2 + i / iMult), cos(angle2 + i / iMult))
      vec3 = createVector(sin(angle3 + i / iMult), cos(angle3 + i / iMult))
    } else if (vecRand == 1.0) {
      if (lineC == 0.0) {
        vec = createVector(sin(angle + i / iMult) ^ sin(angle), cos(angle + i / iMult))
        vec2 = createVector(sin(angle2 + i / iMult) ^ sin(angle2), cos(angle2 + i / iMult))
        vec3 = createVector(sin(angle3 + i / iMult) ^ sin(angle3), cos(angle3 + i / iMult))
      } else {
        vec = createVector(cos(angle + i / iMult), sin(angle + i / iMult) ^ sin(angle))
        vec2 = createVector(cos(angle2 + i / iMult), sin(angle2 + i / iMult) ^ sin(angle2))
        vec3 = createVector(cos(angle3 + i / iMult), sin(angle3 + i / iMult) ^ sin(angle3))
      }
    } else if (vecRand == 2.0) {
      vec = createVector(cos(angle ^ i * iMult) * min1, cos(angle ^ i * iMult))
      vec2 = createVector(cos(angle2 ^ i * iMult) * min2, cos(angle2 ^ i * iMult))
      vec3 = createVector(cos(angle3 ^ i * iMult) * min3, cos(angle3 ^ i * iMult))
    } else if (vecRand == 3.0) {
      vec = createVector(cos(angle2 + i / iMult) ^ tan(angle3), sq(angle2 + i / iMult))
      vec2 = createVector(sin(angle3 + i / iMult) ^ cos(angle3), sin(angle3 + i / iMult))
      vec3 = createVector(sqrt(angle + i / iMult) ^ 1 / sin(angle), cos(angle + i / iMult))
    } else if (vecRand == 4.0) {
      vec = createVector(sq(angle2 * i * iMult), sin(angle2 * i * iMult))
      vec2 = createVector(tan(angle3 * i * iMult), cos(angle3 * i * iMult))
      vec3 = createVector(cos(angle * i * iMult), tan(angle * i * iMult))
    } else if (vecRand == 5.0) {
      vec = createVector((sq(angle + i / iMult) ^ sin(angle)) * min1, sq(angle + i / iMult) * min2)
      vec2 = createVector((sq(angle2 + i / iMult) ^ sin(angle2)) * min1, sq(angle2 + i / iMult) * min2)
      vec3 = createVector((sq(angle3 + i / iMult) ^ sin(angle3)) * min1, sq(angle3 + i / iMult) * min2)
    }









    vec.setMag(1)
    vec2.setMag(1)
    vec3.setMag(1)



    particles[i].add(vec)
    particles2[i].add(vec2)
    particles3[i].add(vec3)




    pg.noStroke()



    if (frameCount < endFrame) {

      if (swOrient == 0.0) {
        movRad = map(particles[i].x, swRandWidth, width - swRandPos, swRand, 0)
        movRad2 = map(particles2[i].x, swRandWidth, width - swRandPos, swRand, 0)
        movRad3 = map(particles3[i].x, swRandWidth, width - swRandPos, swRand, 0)
      } else {
        movRad = map(particles[i].y, swRandWidth, height - swRandPos, swRand, 0)
        movRad2 = map(particles2[i].y, swRandWidth, height - swRandPos, swRand, 0)
        movRad3 = map(particles3[i].y, swRandWidth, height - swRandPos, swRand, 0)
      }




      let sp = 1
      vecRand == 0.0 ? sp = 1 : sp = 2




      let spX = sp * spOrientX
      let spY = sp * spOrientY
      let saat = 8
      let brii1 = 10
      let brii2 = 10
      let brii3 = 10

      let bMult1 = 1.25
      let bMult2 = 1.25
      let bMult3 = 1.25

      let sMult1 = 1.25
      let sMult2 = 1.25
      let sMult3 = 1.25
      let conOrient1 = 1
      let conOrient2 = 1
      let conOrient3 = 1

      if (brightness(c1) < 15) {
        brii1 = 70
        bMult1 = 1
        sMult1 = 2
        conOrient1 = -1
      }
      if (brightness(c2) < 15) {
        brii2 = 70
        bMult2 = 1
        sMult2 = 2
        conOrient2 = -1
      }
      if (brightness(c3) < 15) {
        brii3 = 70
        bMult3 = 1
        sMult3 = 2
        conOrient3 = -1
      }




      if (colorPals == "Mono") bMult1 = 0.85, bMult2 = 0.85, bMult3 = 0.85


      let bri1 = brightness(c1) * bMult1
      let bri2 = brightness(c2) * bMult2
      let bri3 = brightness(c3) * bMult3



      let cond = particles[i].x < width - e * eArX && particles[i].x > e * eArX &&
        particles2[i].x < width - e * eArX && particles2[i].x > e * eArX &&
        particles3[i].x < width - e * eArX && particles3[i].x > e * eArX &&
        particles[i].y < height - e * eArY && particles[i].y > e * eArY &&
        particles2[i].y < height - e * eArY && particles2[i].y > e * eArY &&
        particles3[i].y < height - e * eArY && particles3[i].y > e * eArY;

      let cond2 = particles[i].y < height / 2 - e && particles[i].y > height / 2 + e &&
        particles2[i].y < height / 2 - e && particles2[i].y > height / 2 + e &&
        particles3[i].y < height / 2 - e && particles3[i].y > height / 2 + e

      if (cond) {

        middleE = e * 1.25

        if (midOrient == 0.0) {
          pg.fill(bgCol)
          pg.rect(bandX, bandY, width, middleE)
        } else if (midOrient == 1.0) {
          pg.fill(bgCol)
          pg.rect(bandX, bandY, middleE, height)
        }


        if (colPlacement == 1) {
          pg.fill(hue(c1), saturation(c1), bri1, 1)
        } else if (colPlacement == 2) {
          pg.fill(hue(c2), saturation(c2), bri2, 1)
        } else {
          pg.fill(hue(c3), saturation(c3), bri3, 1)
        }

        let maxAlpha
        let maxAlpha2
        let maxAlpha3
        let theAlpha
        let theAlpha2
        let theAlpha3
        let radd = height / 2.5 ///eArXe falan gore oranla
        let dd = dist(particles[i].x, particles[i].y, width / 2, height / 2)
        let dd2 = dist(particles2[i].x, particles2[i].y, width / 2, height / 2)
        let dd3 = dist(particles3[i].x, particles3[i].y, width / 2, height / 2)

        maxAlpha = map(dd, 0, radd, 1, 0)
        maxAlpha2 = map(dd2, 0, radd, 1, 0)
        maxAlpha3 = map(dd3, 0, radd, 1, 0)
        if (dd > radd) maxAlpha = 0
        if (dd2 > radd) maxAlpha2 = 0
        if (dd3 > radd) maxAlpha3 = 0


        maxAlpha = 1
        maxAlpha2 = 1
        maxAlpha3 = 1

        if (alphaC == 0.0) {
          theAlpha = random(0.01, maxAlpha)
          theAlpha2 = random(0.01, maxAlpha2)
          theAlpha3 = random(0.01, maxAlpha3)
        } else {
          theAlpha = 1
          theAlpha2 = 1
          theAlpha3 = 1
        }


        pg.ellipse(particles[i].x + random(-movRad, movRad), particles[i].y + random(-movRad, movRad), theAlpha)

        if (colPlacement == 1) {
          pg.fill(hue(c1), saat, brii1, 1)
        } else if (colPlacement == 2) {
          pg.fill(hue(c2), saat, brii2, 1)
        } else {
          pg.fill(hue(c3), saat, brii3, 1)
        }

        pg.ellipse(particles[i].x + (spX * conOrient1) + random(-movRad, movRad), particles[i].y + (spY * conOrient1) + random(-movRad, movRad), theAlpha / sMult1)


        if (colPlacement == 1) {
          pg.fill(hue(c2), saturation(c2), bri2, 1) //60
        } else if (colPlacement == 2) {
          pg.fill(hue(c3), saturation(c3), bri3, 1) //60
        } else {
          pg.fill(hue(c1), saturation(c1), bri1, 1) //60
        }

        pg.ellipse(particles2[i].x + random(-movRad2, movRad2), particles2[i].y + random(-movRad2, movRad2), theAlpha2)

        if (colPlacement == 1) {
          pg.fill(hue(c2), saat, brii2, 1) //60
        } else if (colPlacement == 2) {
          pg.fill(hue(c3), saat, brii3, 1) //60
        } else {
          pg.fill(hue(c1), saat, brii1, 1) //60
        }

        pg.ellipse(particles2[i].x + (spX * conOrient2) + random(-movRad2, movRad2), particles2[i].y + (spY * conOrient2) + random(-movRad2, movRad2), theAlpha2 / sMult2)

        if (colPlacement == 1) {
          pg.fill(hue(c3), saturation(c3), bri3, 1) //60
        } else if (colPlacement == 2) {
          pg.fill(hue(c1), saturation(c1), bri1, 1) //60
        } else {
          pg.fill(hue(c2), saturation(c2), bri2, 1) //60
        }


        pg.ellipse(particles3[i].x + random(-movRad3, movRad3), particles3[i].y + random(-movRad3, movRad3), theAlpha3)

        if (colPlacement == 1) {
          pg.fill(hue(c3), saat, brii3, 1) //60
        } else if (colPlacement == 2) {
          pg.fill(hue(c1), saat, brii1, 1) //60
        } else {
          pg.fill(hue(c2), saat, brii2, 1) //60
        }

        pg.ellipse(particles3[i].x + (spX * conOrient3) + random(-movRad3, movRad3), particles3[i].y + (spY * conOrient3) + random(-movRad3, movRad3), theAlpha3 / sMult3)

      }

      mov += 0.000001

    }

  }



  image(pg, 0, 0)
  // image(bf1, 0, 0)


  if (sha) {
    pg.image(shBuf, w / 2, h / 2)
  } else {
    pg.image(pg, w / 2, h / 2)
  }




  if (frameCount > endFrame) {
    // pg.noLoop()
    // for (let i = 0; i < 50; i++) {
    frameRate(30)
    sh.setUniform('resolution', [width * pix, height * pix])

    if (shaType == 0.0) {
      sh.setUniform('pg', bf1) ///bf1
      sh.setUniform('img', pg)
      sh.setUniform('pg2', bf2)
    } else if (shaType == 1.0) {
      sh.setUniform('pg', pg) ///bf1
      sh.setUniform('img', pg)
      sh.setUniform('pg2', bf2)
    } else if (shaType == 2.0) {
      sh.setUniform('pg', bf1) ///bf1
      sh.setUniform('img', pg)
      sh.setUniform('pg2', pg)
    }





    sh.setUniform('u_time', millis() / freq)

    shBuf.shader(sh)
    shBuf.noStroke()

    shBuf.quad(-1, -1, 1, -1, 1, 1, -1, 1)
    if (sha) image(shBuf, 0, 0)


    if (frameCount % frRate == 0) sh.setUniform('dirX', random([-1, 1, 0, 0])), sh.setUniform('dirY', random([-1, 1, 0, 0]))
    if (frameCount > endFrame + shaDur) {
      for (let i = 0; i < 200000 * 2; i++) {
        if (bgCh == 0.0) {
          stroke(0, 0, random([60, 70, 10, 10, 10, 10]), random(0.01, 0.1))
        } else {
          stroke(0, 0, random([10, 20, 60, 60, 60, 60]), random(0.01, 0.1))
        }

        noFill()
        let x = random(e * eArX, width - e * eArX) + random(-movRad, movRad);
        let y = random(e * eArY, height - e * eArY) + random(-movRad, movRad);
        let p = true
        if (midOrient == 0.0) {
          p = y < bandY - middleE / 2 || y > bandY + middleE / 2
        } else if (midOrient == 1.0) {
          p = x < bandX - middleE / 2 || x > bandX + middleE / 2
        } else {
          p = true
        }
        if (p) ellipse(x, y, random(0.1, 0.3))
      }

      // push()
      // rectMode(CENTER)
      // noFill()
      // stroke(0, 0, 0)
      // strokeWeight(0.02)
      // rect(width / 2, height / 2, width - (e * eArX) * 2, height - (e * eArY) * 2)
      // pop()

      bgTexture(50000)
      frameRate(0)

      // saveCanvas("babylon_yenitest " + vecRand + " " + seed + " " + colorPals + " " + index, "png")
      // setTimeout(function () {
      //   window.location.reload(1);
      // }, 5000);

    }
  }





}


function bgTexture(co) {
  for (let i = 0; i < co; i++) {
    let x = random(width)
    let y = random(height)
    let n = noise(x / 100, y / 100)

    noFill()
    if (bgCh == 0.0) {
      stroke(0, 0, 60, random(n) / 30)
    } else {
      stroke(0, 0, 10, random(n) / 30)
    }


    strokeWeight(random(0.1, 1))
    ellipse(x, y, random(59))

  }
}




function granulate(amount) {
  loadPixels();
  const d = pixelDensity();
  const pixelsCount = 4 * (width * d) * (height * d);
  for (let i = 0; i < pixelsCount; i += 4) {
    const grainAmount = random(-amount, amount);
    pixels[i] = pixels[i] + grainAmount;
    pixels[i + 1] = pixels[i + 1] + grainAmount;
    pixels[i + 2] = pixels[i + 2] + grainAmount;
    // comment in, if you want to granulate the alpha value
    // pixels[i+3] = pixels[i+3] + grainAmount;
  }
  updatePixels();
}


function keyPressed() {
  if (key == "s") {
    saveCanvas("babylon " + vecRand + " " + colorPals + " " + index, "png")
  }
}

function colorPalettes() {


  let colPalC = random([0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0])

  if (bgCh == 0.0) {
    if (random(1) < .2) {
      colorPals = random(["bg1", "bg2", "bg5", "bg6"])
    } else {
      colorPals = random(["patara", "bricks", "new5_2", "skyBri", "skyDark", "valenciaSky", "BricksVar", "TonssurTonKirmizi", "TonssurTonMavi", "TonssurTonBeyj", "Bikiks", "Bikiks", "skyDark"])
    }

  } else {
    if (colPalC == 0.0) {
      colorPals = random(["Mono", "patara", "patara"])
    } else {
      colorPals = random(["bricks", "new5", "new5_2", "skyBri", "skyDark", "valenciaSky", "BricksVar", "TonssurTonKirmizi", "TonssurTonMavi", "TonssurTonBeyj", "Bikiks", "TonssurTonYesil"])
    }
  }



  if (colorPals == "lava") {
    // //////lava
    c1 = color(17, 85, 70)
    c2 = color(33, 61, 70)
    c3 = color(14, 83, 14)
  } else if (colorPals == "patara") {
    // // //////Patara
    c1 = color(78, 22, 27)
    c2 = color(31, 57, 77)
    c3 = color(18, 64, 61)
  } else if (colorPals == "prios") {
    // // ////prios
    c1 = color(5, 69, 55)
    c2 = color(70, 10, 10)
    c3 = color(162, 43, 43)
  } else if (colorPals == "summer") {
    // // // //SummerBreeze
    c1 = color(194, 43, 32)
    c2 = color(150, 40, 31)
    c3 = color(27, 40, 58)
    // c3 = color(27, 43, 54)
  } else if (colorPals == "MonoRed") {
    /////MonoRed
    c1 = color(0, 90, 40)
    c2 = color(180, 70, 25)
    c3 = color(40, 80, 10)
  } else if (colorPals == "Mono") {
    // //  ////Mono
    c1 = color(0, 10, 10)
    c2 = color(20, 5, 0)
    c3 = color(210, 10, 18)
  } else if (colorPals == "bricks") { ////////////////////
    ////////////////bricks
    a1 = color(15, 42, 46)
    a2 = color(26, 58, 54)
    a3 = color(0, 25, 39)

    a4 = color(20, 6, 21)
    a5 = color(23, 13, 64)

    let aArr = [a1, a2, a3, a4, a5]

    index = int(random(aArr.length))

    c1 = aArr[index]
    c2 = aArr[(index + 1) % aArr.length]
    c3 = aArr[(index + 2) % aArr.length]

  } else if (colorPals == "new5") {
    ////////////////new5 
    a1 = color(6, 50, 54)
    a2 = color(12, 40, 55)

    a3 = color(195, 50, 30)
    a4 = color(200, 42, 35)
    a5 = color(195, 61, 20)

    let aArr = [a1, a2, a3, a4, a5]

    index = random([0, 1, 3, 4]) //int(random(aArr.length))



    c1 = aArr[index]
    c2 = aArr[(index + 1) % aArr.length]
    c3 = aArr[(index + 2) % aArr.length]
  } else if (colorPals == "new5_2") {
    ////////////////new5_2
    a1 = color(8, 62, 56)
    a2 = color(14, 60, 65)
    a3 = color(26, 50, 63)

    a4 = color(200, 40, 25)
    a5 = color(180, 40, 35)

    let aArr = [a1, a2, a3, a4, a5]

    index = random([1, 2, 3, 4]) //int(random(aArr.length))


    c1 = aArr[index]
    c2 = aArr[(index + 1) % aArr.length]
    c3 = aArr[(index + 2) % aArr.length]
  } else if (colorPals == "skyBri") {
    ////////////////skyBri cok sarılı belki sarısını cıkartmak lazım
    a1 = color(230, 33, 24)
    a2 = color(193, 12, 57)
    a3 = color(210, 42, 33)

    a4 = color(41, 49, 70)
    a5 = color(18, 58, 71)

    let aArr = [a1, a2, a3, a4, a5]

    index = random([2, 4]) //int(random(aArr.length))


    c1 = aArr[index]
    c2 = aArr[(index + 1) % aArr.length]
    c3 = aArr[(index + 2) % aArr.length]
  } else if (colorPals == "skyDark") {
    //////////////skyDark 
    a1 = color(346, 40, 57)
    a2 = color(216, 40, 40)
    a3 = color(340, 66, 45)

    a4 = color(20, 42, 66)
    a5 = color(197, 10, 60)

    let aArr = [a1, a2, a3, a4, a5]

    index = random([0, 1, 3, 4]) //int(random(aArr.length))



    c1 = aArr[index]
    c2 = aArr[(index + 1) % aArr.length]
    c3 = aArr[(index + 2) % aArr.length]
  } else if (colorPals == "valenciaSky") {
    //////////////valenciaSky 
    a1 = color(35, 70, 60)
    a2 = color(30, 61, 55)
    a3 = color(180, 1, 61)

    a4 = color(190, 30, 60)
    a5 = color(200, 40, 40)

    let aArr = [a1, a2, a3, a4, a5]

    index = random([2, 3]) //int(random(aArr.length))

    c1 = aArr[index]
    c2 = aArr[(index + 1) % aArr.length]
    c3 = aArr[(index + 2) % aArr.length]
  } else if (colorPals == "BricksVar") {
    //////////////Bricks var
    a1 = color(32, 48, 60)
    a2 = color(8, 31, 43)
    a3 = color(210, 31, 60)

    a4 = color(28, 11, 55)
    a5 = color(220, 3, 26)

    let aArr = [a1, a2, a3, a4, a5]

    index = random([0, 1, 2, 3]) //int(random(aArr.length))

    c1 = aArr[index]
    c2 = aArr[(index + 1) % aArr.length]
    c3 = aArr[(index + 2) % aArr.length]
  } else if (colorPals == "TonssurTonKirmizi") {
    ////////////////////////TonssurTonKırmızı
    a1 = color(357, 57, 60)
    a2 = color(1, 52, 65)
    a3 = color(0, 38, 67)

    a4 = color(1, 24, 69)
    a5 = color(6, 15, 69)

    let aArr = [a1, a2, a3, a4, a5]

    index = random([3, 4]) //int(random(aArr.length))


    c1 = aArr[index]
    c2 = aArr[(index + 1) % aArr.length]
    c3 = aArr[(index + 2) % aArr.length]
  } else if (colorPals == "TonssurTonMavi") {
    ///////////////////////TonssurTonMavi
    a1 = color(197, 57, 60)
    a2 = color(201, 52, 65)
    a3 = color(200, 38, 67)

    a4 = color(201, 24, 69)
    a5 = color(206, 15, 69)

    let aArr = [a1, a2, a3, a4, a5]

    index = random([3, 4]) //int(random(aArr.length))


    c1 = aArr[index]
    c2 = aArr[(index + 1) % aArr.length]
    c3 = aArr[(index + 2) % aArr.length]
  } else if (colorPals == "TonssurTonBeyj") {
    ////////////////////////TonssurTonBeyj
    a1 = color(21, 57, 60)
    a2 = color(26, 52, 65)
    a3 = color(25, 38, 67)

    a4 = color(26, 24, 69)
    a5 = color(32, 15, 69)

    let aArr = [a1, a2, a3, a4, a5]

    index = random([1, 3]) //int(random(aArr.length))

    c1 = aArr[index]
    c2 = aArr[(index + 1) % aArr.length]
    c3 = aArr[(index + 2) % aArr.length]
  } else if (colorPals == "Bikiks") {
    ////////////////////////Bikiks

    a1 = color(180, 20, 63)
    a2 = color(174, 29, 50)
    a3 = color(75, 23, 25)

    a4 = color(43, 22, 75)
    a5 = color(28, 39, 56)

    let aArr = [a1, a2, a3, a4, a5]

    index = random([0, 1, 2, 4]) //int(random(aArr.length))



    c1 = aArr[index]
    c2 = aArr[(index + 1) % aArr.length]
    c3 = aArr[(index + 2) % aArr.length]
  } else if (colorPals == "TonssurTonYesil") {
    ////////////////////////TonssurTonYesil
    a1 = color(0, 0, 67)
    a2 = color(197, 22, 35)
    a3 = color(180, 10, 52)

    a4 = color(137, 5, 57)
    a5 = color(172, 33, 24)

    let aArr = [a1, a2, a3, a4, a5]

    index = random([2, 4]) //int(random(aArr.length))



    c1 = aArr[index]
    c2 = aArr[(index + 1) % aArr.length]
    c3 = aArr[(index + 2) % aArr.length]
  }


  if (colorPals == "bg1") {
    c1 = color(11, 77, 52)
    c2 = color(25, 69, 65)
    c3 = color(68, 37, 59)
  }
  if (colorPals == "bg2") {
    c1 = color(25, 31, 88)
    c2 = color(153, 25, 64)
    c3 = color(5, 79, 70)
  }
  if (colorPals == "bg3") {
    c1 = color(138, 33, 54)
    c2 = color(12, 51, 74)
    c3 = color(47, 36, 80)

  }
  if (colorPals == "bg4") {
    c1 = color(39, 39, 70)
    c2 = color(55, 54, 54)
    c3 = color(33, 83, 64)
  }
  if (colorPals == "bg5") {
    ////////////////////////BricksvarVar
    a1 = color(32, 40, 60)
    a2 = color(8, 25, 50)
    a3 = color(80, 10, 55)

    a4 = color(35, 11, 55)
    a5 = color(23, 8, 65)

    let aArr = [a1, a2, a3, a4, a5]

    index = int(random(aArr.length))


    c1 = aArr[index]
    c2 = aArr[(index + 1) % aArr.length]
    c3 = aArr[(index + 2) % aArr.length]
  }

  if (colorPals == "bg6") {

    c1 = color(203, 47, 58)
    c2 = color(45, 17, 76)
    c3 = color(16, 56, 65)
  }
  if (colorPals == "bg10") {

    c1 = color(326, 34, 33)
    c2 = color(195, 31, 56)
    c3 = color(238, 19, 51)
  }

}