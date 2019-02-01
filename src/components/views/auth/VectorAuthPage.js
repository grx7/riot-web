/*
Copyright 2019 New Vector Ltd

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

'use strict';

const React = require('react');
import sdk from 'matrix-react-sdk/lib/index';

module.exports = React.createClass({
    displayName: 'VectorAuthPage',

    statics: {
        replaces: 'AuthPage',
    },

    render: function() {
        const AuthFooter = sdk.getComponent('auth.AuthFooter');

        const style = {
            background: 'center/cover fixed url(../../themes/riot/img/backgrounds/valley.jpg)',
        };

        return (
            <div className="mx_AuthPage" style={style}>
                <div className="mx_AuthPage_modal">
                    { this.props.children }
                </div>
                <AuthFooter />
            </div>
        );
    },
});
