// Prusa Parser
// Florencio 2024

// Under the Apache License

class prusaParser {
    
    static parseJson(jsonFile) {

      const tmpNotif = {
        fileName: "",
        printerName: "",
        fileStatus: ""
      }
  
      tmpNotif.fileName = jsonFile.content.match(/Print job \[\*\*(.*?)\*\*\]/)[1]
  
      tmpNotif.printerName = jsonFile.content.match(/\[\*\*(.*?)\*\*\]/)[1]
  
      tmpNotif.fileStatus = jsonFile.content.match(/was \*\*(.*?)\*\*/)[1]
  
      return tmpNotif

    }

  }
  