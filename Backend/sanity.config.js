import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'
import { colorInput } from '@sanity/color-input'

export default defineConfig({
  name: 'default',
  title: 'portfolio-01',

  projectId: 'd51a3wt6',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), vercelDeployTool(), colorInput()],

  schema: {
    types: schemaTypes,
  },
})
