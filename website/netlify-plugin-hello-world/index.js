// index.js

module.exports = {
  onPreBuild({ utils }) {
    utils.status.show({
      // Optional. Default to the plugin’s name followed by a generic title.
      title: 'Main title',
      // Required.
      summary: 'Message below the title',
      // Optional. Empty by default.
      text: 'Detailed information shown in a collapsible section',
    })
  },
}
