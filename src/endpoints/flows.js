import CRUDExtend from '../extends/crud'

import { buildURL } from '../utils/helpers'

class FlowsEndpoint extends CRUDExtend {
  constructor(endpoint) {
    super(endpoint)

    this.endpoint = 'flows'
  }

  GetEntries(slug) {
    const { limit, offset } = this

    return this.request.send(
      buildURL(`${this.endpoint}/${slug}/entries`, {
        limit,
        offset
      }),
      'GET'
    )
  }

  GetEntry(slug, entryId) {
    return this.request.send(
      `${this.endpoint}/${slug}/entries/${entryId}`,
      'GET'
    )
  }

  GetFields(slug) {
    return this.request.send(`${this.endpoint}/${slug}/fields`, 'GET')
  }

  CreateEntry(slug, body) {
    return this.request.send(`${this.endpoint}/${slug}/entries`, 'POST', {
      ...body,
      type: 'entry'
    })
  }

  UpdateEntry(slug, entryId, body) {
    return this.request.send(
      `${this.endpoint}/${slug}/entries/${entryId}`,
      'PUT',
      { ...body, type: 'entry' }
    )
  }

  DeleteEntry(slug, entryId) {
    return this.request.send(
      `${this.endpoint}/${slug}/entries/${entryId}`,
      'DELETE'
    )
  }

  CreateEntryRelationship(flowSlug, entryId, fieldSlug, body = {}) {
    return this.request.send(
      `${
        this.endpoint
      }/${flowSlug}/entries/${entryId}/relationships/${fieldSlug}`,
      'POST',
      {
        ...body
      }
    )
  }

  UpdateEntryRelationship(flowSlug, entryId, fieldSlug, body = {}) {
    return this.request.send(
      `${
        this.endpoint
      }/${flowSlug}/entries/${entryId}/relationships/${fieldSlug}`,
      'PUT',
      {
        ...body
      }
    )
  }

  DeleteEntryRelationship(flowSlug, entryId, fieldSlug) {
    return this.request.send(
      `${
        this.endpoint
      }/${flowSlug}/entries/${entryId}/relationships/${fieldSlug}`,
      'DELETE'
    )
  }

  GetFlowTypeAttributes(flowType, token = null) {
    return this.request.send(
      `${this.endpoint}/${flowType}/attributes`,
      'GET',
      undefined,
      token
    )
  }
}

export default FlowsEndpoint
