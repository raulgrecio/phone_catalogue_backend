import mongoose from 'mongoose'
import CONFIG from './config'

mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)
// Connecting to the database
export default (async () => {
  try {
    const mongoOpts = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    }

    await mongoose.connect(CONFIG.DB_HOST, mongoOpts)
    // listen for requests
    console.log('Connected to the Database')

    //TODO: BORRAR BD Y VOLCAR DATOS
  } catch (err) {
    console.log(`${err} Could not Connect to the Database. Exiting Now...`)
    process.exit(1)
  }
})()

export function disconnect(): Promise<void> {
  console.log('Disconnecting from the Database...')
  return mongoose.disconnect()
}
