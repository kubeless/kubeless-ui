/*
Copyright 2017 Bitnami.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// @flowoo
import React, { Component } from 'react'
import './Templates.scss'
import type { Template } from 'utils/Types'

export default class Templates extends Component {

  props: {
    templates: Array<Template>,
    loading: boolean,
    onFetchTemplates: () => void
  }

  componentDidMount() {
    this.props.onFetchTemplates()
  }

  selectTemplate(template: Template) {
    alert('Create from template not supported yet.')
  }

  render() {
    const { templates, loading } = this.props

    return (
      <div className='templates'>
        <div className='list'>
          {loading && templates.length === 0 && <div className='loading'>Loading...</div>}
          {templates.map(t => this.renderTemplate(t))}
        </div>
      </div>
    )
  }

  renderTemplate(template: Template) {
    return (
      <div key={template.id} className={`templateItem ${template.name[0]}`}
        onClick={() => this.selectTemplate(template)}>
        <p className='title'>{template.name}</p>
        <p className='description'>{template.description}</p>
      </div>
    )
  }

}
