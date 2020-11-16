// eslint-disable-next-line @typescript-eslint/no-var-requires
const Fixtures = require('node-mongodb-fixtures')
import CONFIG from './config'

// The MongoDB native drive options object
const mongoOpts = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

// NOTE: other example configurations
// const mongoOpts = {
//   ssl: true,
//   sslValidate: true,
//   sslCA: myCert,
// };

export async function restoreDatabase(force = false): Promise<void> {
  if (!force && !CONFIG.DB_RESTORE) return
  const fixtures = new Fixtures({
    dir: 'data/fixtures',
    filter: '.*' // optional
  })

  try {
    await fixtures.connect(CONFIG.DB_HOST, mongoOpts)
    await fixtures.unload()
    await fixtures.load()
  } catch (e) {
    // console.error(e)
  } finally {
    await fixtures.disconnect()
  }
}
