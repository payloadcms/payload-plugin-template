import type { Server } from 'http'
import mongoose from 'mongoose'
import payload from 'payload'
import { start } from './src/server'

describe('Plugin tests', () => {
  let server: Server

  beforeAll(async () => {
    server = await start()
    // Allow Payload to fully start
    await new Promise(resolve => setTimeout(resolve, 1000))
  }, 30000)

  afterAll(async () => {
    server.close()
    await mongoose.connection.dropDatabase()
    await mongoose.connection.close()
  }, 10000)

  // Add tests to ensure that the plugin works as expected

  // Example test to check for seeded data
  it('seeds data accordingly', async () => {
    await payload.create({
      collection: 'new-collection',
      data: {
        title: 'Seeded title',
      },
    })
    const newCollectionQuery = await payload.find({
      collection: 'new-collection',
      sort: 'createdAt',
    })

    expect(newCollectionQuery.totalDocs).toEqual(1)
  })
})
