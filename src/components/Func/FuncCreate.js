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

// @flow
import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import type { Cluster } from 'utils/Types'
import FuncParams from './FuncParams'
import './FuncParams.scss'

export default class FuncCreate extends Component {

  props: {
    cluster: Cluster,
    open?: boolean,
    onDismiss: () => void,
    onCreate: (params: any, cluster: Cluster) => void
  }

  donePressed = () => {
    const params = this.refs.funcParams.getParams()
    this.props.onCreate(params, this.props.cluster)
    this.props.onDismiss()
  }

  render() {
    const { open, onDismiss } = this.props

    const dialogActions = [
      <FlatButton label='Cancel' primary onClick={onDismiss} />,
      <FlatButton label='Create' primary onClick={this.donePressed} />
    ]

    return (
      <Dialog
        title='New Function'
        modal={false}
        actions={dialogActions}
        open={!!open}
        onRequestClose={onDismiss}
        contentStyle={{ maxWidth: '600px' }}
        autoScrollBodyContent
      >
        <div className='funcCreate'>
          <FuncParams ref='funcParams' />
        </div>
      </Dialog>
    )
  }

}
