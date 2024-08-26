  
      class WorkletProcessor extends AudioWorkletProcessor {
        constructor() {
            super();

//                this.outputStart  = amy_module.outputBufferPtr();
//                this.outputBuffer = new Float32Array(amy_module.memory.buffer,
//                                                         this.outputStart,
//                                                         128);
//                this.filter = filter;
//            }
        }
        process(inputList, outputList, parameters) {   
            window.filter();
            outputList[0][0].set(this.outputBuffer);
            return true;
        }
      }
      registerProcessor('workletprocessor', WorkletProcessor);
