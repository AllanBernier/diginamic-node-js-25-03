
setInterval(() => {
  console.log("Process running !")
}, 1000)


const LongCPUTask = () => {

  let i = 0

  while (i < 10_000_000_000){
    i++
    if (i % 100_000_000 == 0){
      console.log(i)
    }
  }
}

LongCPUTask()