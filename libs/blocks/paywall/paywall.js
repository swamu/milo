import { createTag, getConfig, loadScript } from '../../utils/utils.js';

const dt= {
  "master": {
      "buttons": [
          {
              "_path": "/content/dam/pandora/react-mini-app-unified-paywall_lrweb/v1/en/paywall_qa_28506/cta_button",
              "_variation": "master",
              "label": {
                  "html": "<p>Upgrade</p>",
                  "markdown": "Upgrade\n\n",
                  "plaintext": "Upgrade",
                  "json": [
                      {
                          "nodeType": "paragraph",
                          "content": [
                              {
                                  "nodeType": "text",
                                  "value": "Upgrade"
                              }
                          ]
                      }
                  ]
              },
              "clickAction": "commitment",
              "fragmentId": "e4a200e8-1965-404e-8549-aa2839894e69",
              "locReady": false,
              "_metadata": {
                  "stringMetadata": [
                      {
                          "name": "title",
                          "value": "cta_button"
                      },
                      {
                          "name": "description",
                          "value": "Default content fragment for paywall CTA button."
                      }
                  ],
                  "stringArrayMetadata": [],
                  "intMetadata": [],
                  "intArrayMetadata": [],
                  "floatMetadata": [],
                  "floatArrayMetadata": [],
                  "booleanMetadata": [],
                  "booleanArrayMetadata": [],
                  "calendarMetadata": [
                      {
                          "name": "jcr:created",
                          "value": "2023-06-28T12:24:44.225Z"
                      },
                      {
                          "name": "cq:lastModified",
                          "value": "2023-06-28T12:24:50.981Z"
                      }
                  ],
                  "calendarArrayMetadata": []
              },
              "_variations": [
                  "defaultnewVariant644",
                  "defaultnewVariant973",
                  "newVariant402",
                  "newVariant1043",
                  "newVariant469",
                  "newVariant643",
                  "newVariant831",
                  "newVariant748"
              ],
              "_model": {
                  "_path": "/conf/pandora/settings/dam/cfm/models/react-mini-app-unified-paywall-v1-button",
                  "title": "react-mini-app-unified-paywall v1 button"
              },
              "_tags": []
          },
          {
              "_path": "/content/dam/pandora/react-mini-app-unified-paywall_lrweb/v1/en/paywall_qa_28506/secondary_button",
              "_variation": "master",
              "label": {
                  "html": "<p>View more plans</p>\n",
                  "markdown": "View more plans\n\n ",
                  "plaintext": "View more plans",
                  "json": [
                      {
                          "nodeType": "paragraph",
                          "content": [
                              {
                                  "nodeType": "text",
                                  "value": "View more plans"
                              }
                          ]
                      }
                  ]
              },
              "clickAction": "bundle",
              "fragmentId": "66ecbcf3-8f91-4e5f-aa71-c0d57c470ee6",
              "locReady": false,
              "_metadata": {
                  "stringMetadata": [
                      {
                          "name": "title",
                          "value": "secondary_button"
                      },
                      {
                          "name": "description",
                          "value": "Default content fragment for secondary button"
                      }
                  ],
                  "stringArrayMetadata": [],
                  "intMetadata": [],
                  "intArrayMetadata": [],
                  "floatMetadata": [],
                  "floatArrayMetadata": [],
                  "booleanMetadata": [],
                  "booleanArrayMetadata": [],
                  "calendarMetadata": [
                      {
                          "name": "jcr:created",
                          "value": "2023-06-28T12:24:44.855Z"
                      },
                      {
                          "name": "cq:lastModified",
                          "value": "2023-06-28T12:24:51.191Z"
                      }
                  ],
                  "calendarArrayMetadata": []
              },
              "_variations": [
                  "defaultnewVariant644",
                  "defaultnewVariant973",
                  "newVariant402",
                  "newVariant1043",
                  "newVariant469",
                  "newVariant643",
                  "newVariant831",
                  "newVariant748"
              ],
              "_model": {
                  "_path": "/conf/pandora/settings/dam/cfm/models/react-mini-app-unified-paywall-v1-button",
                  "title": "react-mini-app-unified-paywall v1 button"
              },
              "_tags": []
          }
      ],
      "headings": [
          {
              "_path": "/content/dam/pandora/react-mini-app-unified-paywall_lrweb/v1/en/paywall_qa_28506/heading",
              "_variation": "master",
              "heading": {
                  "html": "<p>Maximize your creativity with premium</p>\n",
                  "markdown": "Maximize your creativity with premium\n\n ",
                  "plaintext": "Maximize your creativity with premium",
                  "json": [
                      {
                          "nodeType": "paragraph",
                          "content": [
                              {
                                  "nodeType": "text",
                                  "value": "Minimize your creativity with premium"
                              }
                          ]
                      }
                  ]
              },
              "fragmentId": "877138e8-71e4-4c9b-ac5f-2d60af724af8",
              "locReady": false,
              "_metadata": {
                  "stringMetadata": [
                      {
                          "name": "title",
                          "value": "heading"
                      },
                      {
                          "name": "description",
                          "value": "Default content fragment for Composable Heading component"
                      }
                  ],
                  "stringArrayMetadata": [],
                  "intMetadata": [],
                  "intArrayMetadata": [],
                  "floatMetadata": [],
                  "floatArrayMetadata": [],
                  "booleanMetadata": [],
                  "booleanArrayMetadata": [],
                  "calendarMetadata": [
                      {
                          "name": "jcr:created",
                          "value": "2023-06-28T12:24:44.543Z"
                      },
                      {
                          "name": "cq:lastModified",
                          "value": "2023-06-28T12:24:52.379Z"
                      }
                  ],
                  "calendarArrayMetadata": []
              },
              "_variations": [
                  "defaultnewVariant644",
                  "defaultnewVariant973",
                  "newVariant402",
                  "newVariant1043",
                  "newVariant469",
                  "newVariant643",
                  "newVariant831",
                  "newVariant748"
              ],
              "_model": {
                  "_path": "/conf/pandora/settings/dam/cfm/models/react-mini-app-unified-paywall-v1-heading",
                  "title": "react-mini-app-unified-paywall v1 heading"
              },
              "_tags": []
          }
      ],
      "images": [
          {
              "_path": "/content/dam/pandora/react-mini-app-unified-paywall_lrweb/v1/en/paywall_qa_28506/image",
              "_variation": "master",
              "image": {
                  "type": "image",
                  "_path": "/content/dam/pandora/react-mini-app-unified-paywall/images/Photoshop.jpg",
                  "_authorUrl": "https://author-p22655-e155390.adobeaemcloud.com/content/dam/pandora/react-mini-app-unified-paywall/images/Photoshop.jpg",
                  "_publishUrl": "https://main--cc--adobecom.hlx.page/media_102d1e323026f66d03b799a4e79e9b00e6b2b3818.jpeg#width=3309&height=3376",
                  "width": 1000,
                  "height": 1000,
                  "mimeType": "image/jpeg",
                  "_dynamicUrl": "/adobe/dynamicmedia/deliver/dm-aid--dd23cd1b-cc92-466c-a85f-2b2b0cab9841/Photoshop.jpg"
              },
              "altText": null,
              "fragmentId": "48858298-899b-4a40-bba3-273069999852",
              "locReady": false,
              "_metadata": {
                  "stringMetadata": [
                      {
                          "name": "title",
                          "value": "image"
                      },
                      {
                          "name": "description",
                          "value": "Default content fragment for ComposableImage component."
                      }
                  ],
                  "stringArrayMetadata": [],
                  "intMetadata": [],
                  "intArrayMetadata": [],
                  "floatMetadata": [],
                  "floatArrayMetadata": [],
                  "booleanMetadata": [],
                  "booleanArrayMetadata": [],
                  "calendarMetadata": [
                      {
                          "name": "jcr:created",
                          "value": "2023-06-28T12:24:44.662Z"
                      },
                      {
                          "name": "cq:lastModified",
                          "value": "2023-06-28T12:24:50.516Z"
                      }
                  ],
                  "calendarArrayMetadata": []
              },
              "_variations": [
                  "defaultnewVariant644",
                  "defaultnewVariant973",
                  "newVariant402",
                  "newVariant1043",
                  "newVariant469",
                  "newVariant643",
                  "newVariant831",
                  "newVariant748"
              ],
              "_model": {
                  "_path": "/conf/pandora/settings/dam/cfm/models/react-mini-app-unified-paywall-v1-image",
                  "title": "react-mini-app-unified-paywall v1 image"
              },
              "_tags": []
          }
      ],
      "lists": [
          {
              "_path": "/content/dam/pandora/react-mini-app-unified-paywall_lrweb/v1/en/paywall_qa_28506/feature_list",
              "_variation": "master",
              "listItems": [
                  {
                      "_path": "/content/dam/pandora/react-mini-app-unified-paywall_lrweb/v1/en/paywall_qa_28506/feature_list_item_1",
                      "_variation": "master",
                      "icon": {
                          "type": "document",
                          "_path": "/content/dam/pandora/react-mini-app-unified-paywall/images/Smock_3DMaterials_18_N.svg",
                          "_authorUrl": "https://author-p22655-e155390.adobeaemcloud.com/content/dam/pandora/react-mini-app-unified-paywall/images/Smock_3DMaterials_18_N.svg",
                          "_publishUrl": "https://qa-odin.adobe.com/content/dam/pandora/react-mini-app-unified-paywall/images/Smock_3DMaterials_18_N.svg",
                          "size": 1086,
                          "author": null,
                          "format": "image/svg+xml"
                      },
                      "text": {
                          "html": "<p>Download the Photoshop desktop app to access neural filters, create 3D artwork, and more.</p>\n",
                          "markdown": "Download the Photoshop desktop app to access neural filters, create 3D artwork, and more.\n\n ",
                          "plaintext": "Download the Photoshop desktop app to access neural filters, create 3D artwork, and more.",
                          "json": [
                              {
                                  "nodeType": "paragraph",
                                  "content": [
                                      {
                                          "nodeType": "text",
                                          "value": "Download the Photoshop desktop app to access neural filters, create 3D artwork, and more."
                                      }
                                  ]
                              }
                          ]
                      },
                      "locReady": false,
                      "_metadata": {
                          "stringMetadata": [
                              {
                                  "name": "title",
                                  "value": "feature_list_item_1"
                              },
                              {
                                  "name": "description",
                                  "value": "First default content fragment for list item in ComposableList component."
                              }
                          ],
                          "stringArrayMetadata": [],
                          "intMetadata": [],
                          "intArrayMetadata": [],
                          "floatMetadata": [],
                          "floatArrayMetadata": [],
                          "booleanMetadata": [],
                          "booleanArrayMetadata": [],
                          "calendarMetadata": [
                              {
                                  "name": "jcr:created",
                                  "value": "2023-06-28T12:24:44.438Z"
                              },
                              {
                                  "name": "cq:lastModified",
                                  "value": "2023-03-07T17:48:31.772Z"
                              }
                          ],
                          "calendarArrayMetadata": []
                      },
                      "_variations": [],
                      "_model": {
                          "_path": "/conf/pandora/settings/dam/cfm/models/react-mini-app-unified-paywall-v1-listitem",
                          "title": "react-mini-app-unified-paywall v1 list_item"
                      },
                      "_tags": []
                  },
                  {
                      "_path": "/content/dam/pandora/react-mini-app-unified-paywall_lrweb/v1/en/paywall_qa_28506/feature_list_item_2",
                      "_variation": "master",
                      "icon": {
                          "type": "document",
                          "_path": "/content/dam/pandora/react-mini-app-unified-paywall/images/Smock_ABC_18_N.svg",
                          "_authorUrl": "https://author-p22655-e155390.adobeaemcloud.com/content/dam/pandora/react-mini-app-unified-paywall/images/Smock_ABC_18_N.svg",
                          "_publishUrl": "https://qa-odin.adobe.com/content/dam/pandora/react-mini-app-unified-paywall/images/Smock_ABC_18_N.svg",
                          "size": 1648,
                          "author": null,
                          "format": "image/svg+xml"
                      },
                      "text": {
                          "html": "<p>Edit, enhance, and combine digital images using object select, curves, spot healing, and more.</p>\n",
                          "markdown": "Edit, enhance, and combine digital images using object select, curves, spot healing, and more.\n\n ",
                          "plaintext": "Edit, enhance, and combine digital images using object select, curves, spot healing, and more.",
                          "json": [
                              {
                                  "nodeType": "paragraph",
                                  "content": [
                                      {
                                          "nodeType": "text",
                                          "value": "Edit, enhance, and combine digital images using object select, curves, spot healing, and more."
                                      }
                                  ]
                              }
                          ]
                      },
                      "locReady": false,
                      "_metadata": {
                          "stringMetadata": [
                              {
                                  "name": "title",
                                  "value": "feature_list_item_2"
                              },
                              {
                                  "name": "description",
                                  "value": "Second default content fragment for list item in ComposableList component."
                              }
                          ],
                          "stringArrayMetadata": [],
                          "intMetadata": [],
                          "intArrayMetadata": [],
                          "floatMetadata": [],
                          "floatArrayMetadata": [],
                          "booleanMetadata": [],
                          "booleanArrayMetadata": [],
                          "calendarMetadata": [
                              {
                                  "name": "jcr:created",
                                  "value": "2023-06-28T12:24:44.458Z"
                              },
                              {
                                  "name": "cq:lastModified",
                                  "value": "2023-03-07T17:50:04.865Z"
                              }
                          ],
                          "calendarArrayMetadata": []
                      },
                      "_variations": [],
                      "_model": {
                          "_path": "/conf/pandora/settings/dam/cfm/models/react-mini-app-unified-paywall-v1-listitem",
                          "title": "react-mini-app-unified-paywall v1 list_item"
                      },
                      "_tags": []
                  },
                  {
                      "_path": "/content/dam/pandora/react-mini-app-unified-paywall_lrweb/v1/en/paywall_qa_28506/feature_list_item_3",
                      "_variation": "master",
                      "icon": {
                          "type": "document",
                          "_path": "/content/dam/pandora/react-mini-app-unified-paywall/images/Smock_AEMScreens_18_N.svg",
                          "_authorUrl": "https://author-p22655-e155390.adobeaemcloud.com/content/dam/pandora/react-mini-app-unified-paywall/images/Smock_AEMScreens_18_N.svg",
                          "_publishUrl": "https://qa-odin.adobe.com/content/dam/pandora/react-mini-app-unified-paywall/images/Smock_AEMScreens_18_N.svg",
                          "size": 941,
                          "author": null,
                          "format": "image/svg+xml"
                      },
                      "text": {
                          "html": "<p>Harness the power of Adobe Camera Raw right in the Photoshop web editor.</p>\n",
                          "markdown": "Harness the power of Adobe Camera Raw right in the Photoshop web editor.\n\n ",
                          "plaintext": "Harness the power of Adobe Camera Raw right in the Photoshop web editor.",
                          "json": [
                              {
                                  "nodeType": "paragraph",
                                  "content": [
                                      {
                                          "nodeType": "text",
                                          "value": "Harness the power of Adobe Camera Raw right in the Photoshop web editor."
                                      }
                                  ]
                              }
                          ]
                      },
                      "locReady": false,
                      "_metadata": {
                          "stringMetadata": [
                              {
                                  "name": "title",
                                  "value": "feature_list_item_3"
                              },
                              {
                                  "name": "description",
                                  "value": "Third default content fragment for list item in ComposableList component."
                              }
                          ],
                          "stringArrayMetadata": [],
                          "intMetadata": [],
                          "intArrayMetadata": [],
                          "floatMetadata": [],
                          "floatArrayMetadata": [],
                          "booleanMetadata": [],
                          "booleanArrayMetadata": [],
                          "calendarMetadata": [
                              {
                                  "name": "jcr:created",
                                  "value": "2023-06-28T12:24:44.479Z"
                              },
                              {
                                  "name": "cq:lastModified",
                                  "value": "2023-03-07T17:51:27.378Z"
                              }
                          ],
                          "calendarArrayMetadata": []
                      },
                      "_variations": [],
                      "_model": {
                          "_path": "/conf/pandora/settings/dam/cfm/models/react-mini-app-unified-paywall-v1-listitem",
                          "title": "react-mini-app-unified-paywall v1 list_item"
                      },
                      "_tags": []
                  },
                  {
                      "_path": "/content/dam/pandora/react-mini-app-unified-paywall_lrweb/v1/en/paywall_qa_28506/feature_list_item_4",
                      "_variation": "master",
                      "icon": {
                          "type": "document",
                          "_path": "/content/dam/pandora/react-mini-app-unified-paywall/images/Smock_Actions_18_N.svg",
                          "_authorUrl": "https://author-p22655-e155390.adobeaemcloud.com/content/dam/pandora/react-mini-app-unified-paywall/images/Smock_Actions_18_N.svg",
                          "_publishUrl": "https://qa-odin.adobe.com/content/dam/pandora/react-mini-app-unified-paywall/images/Smock_Actions_18_N.svg",
                          "size": 1257,
                          "author": null,
                          "format": "image/svg+xml"
                      },
                      "text": {
                          "html": "<p>Automatically access Adobe Fonts and bring thousands of beautiful fonts to your project.</p>\n",
                          "markdown": "Automatically access Adobe Fonts and bring thousands of beautiful fonts to your project.\n\n ",
                          "plaintext": "Automatically access Adobe Fonts and bring thousands of beautiful fonts to your project.",
                          "json": [
                              {
                                  "nodeType": "paragraph",
                                  "content": [
                                      {
                                          "nodeType": "text",
                                          "value": "Automatically access Adobe Fonts and bring thousands of beautiful fonts to your project."
                                      }
                                  ]
                              }
                          ]
                      },
                      "locReady": false,
                      "_metadata": {
                          "stringMetadata": [
                              {
                                  "name": "title",
                                  "value": "feature_list_item_4"
                              },
                              {
                                  "name": "description",
                                  "value": "Fourth default content fragment for list item in ComposableList component."
                              }
                          ],
                          "stringArrayMetadata": [],
                          "intMetadata": [],
                          "intArrayMetadata": [],
                          "floatMetadata": [],
                          "floatArrayMetadata": [],
                          "booleanMetadata": [],
                          "booleanArrayMetadata": [],
                          "calendarMetadata": [
                              {
                                  "name": "jcr:created",
                                  "value": "2023-06-28T12:24:44.502Z"
                              },
                              {
                                  "name": "cq:lastModified",
                                  "value": "2023-03-07T17:52:44.883Z"
                              }
                          ],
                          "calendarArrayMetadata": []
                      },
                      "_variations": [],
                      "_model": {
                          "_path": "/conf/pandora/settings/dam/cfm/models/react-mini-app-unified-paywall-v1-listitem",
                          "title": "react-mini-app-unified-paywall v1 list_item"
                      },
                      "_tags": []
                  },
                  {
                      "_path": "/content/dam/pandora/react-mini-app-unified-paywall_lrweb/v1/en/paywall_qa_28506/feature_list_item_5",
                      "_variation": "master",
                      "icon": {
                          "type": "document",
                          "_path": "/content/dam/pandora/react-mini-app-unified-paywall/images/Smock_AdDisplay_18_N.svg",
                          "_authorUrl": "https://author-p22655-e155390.adobeaemcloud.com/content/dam/pandora/react-mini-app-unified-paywall/images/Smock_AdDisplay_18_N.svg",
                          "_publishUrl": "https://qa-odin.adobe.com/content/dam/pandora/react-mini-app-unified-paywall/images/Smock_AdDisplay_18_N.svg",
                          "size": 596,
                          "author": null,
                          "format": "image/svg+xml"
                      },
                      "text": {
                          "html": "<p>Create wherever you are. Access your PSDs on your browser, iPad, desktop, and more.</p>\n",
                          "markdown": "Create wherever you are. Access your PSDs on your browser, iPad, desktop, and more.\n\n ",
                          "plaintext": "Create wherever you are. Access your PSDs on your browser, iPad, desktop, and more.",
                          "json": [
                              {
                                  "nodeType": "paragraph",
                                  "content": [
                                      {
                                          "nodeType": "text",
                                          "value": "Create wherever you are. Access your PSDs on your browser, iPad, desktop, and more."
                                      }
                                  ]
                              }
                          ]
                      },
                      "locReady": false,
                      "_metadata": {
                          "stringMetadata": [
                              {
                                  "name": "title",
                                  "value": "feature_list_item_5"
                              },
                              {
                                  "name": "description",
                                  "value": "Fifth default content fragment for list item in ComposableList component."
                              }
                          ],
                          "stringArrayMetadata": [],
                          "intMetadata": [],
                          "intArrayMetadata": [],
                          "floatMetadata": [],
                          "floatArrayMetadata": [],
                          "booleanMetadata": [],
                          "booleanArrayMetadata": [],
                          "calendarMetadata": [
                              {
                                  "name": "jcr:created",
                                  "value": "2023-06-28T12:24:44.522Z"
                              },
                              {
                                  "name": "cq:lastModified",
                                  "value": "2023-03-14T18:48:47.006Z"
                              }
                          ],
                          "calendarArrayMetadata": []
                      },
                      "_variations": [],
                      "_model": {
                          "_path": "/conf/pandora/settings/dam/cfm/models/react-mini-app-unified-paywall-v1-listitem",
                          "title": "react-mini-app-unified-paywall v1 list_item"
                      },
                      "_tags": []
                  }
              ],
              "fragmentId": "2182b4b3-a3b9-42b3-a8c6-4f3cd3ba5764",
              "_metadata": {
                  "stringMetadata": [
                      {
                          "name": "title",
                          "value": "feature_list"
                      },
                      {
                          "name": "description",
                          "value": "Default content fragment for ComposableList component."
                      }
                  ],
                  "stringArrayMetadata": [],
                  "intMetadata": [],
                  "intArrayMetadata": [],
                  "floatMetadata": [],
                  "floatArrayMetadata": [],
                  "booleanMetadata": [],
                  "booleanArrayMetadata": [],
                  "calendarMetadata": [
                      {
                          "name": "jcr:created",
                          "value": "2023-06-28T12:24:44.326Z"
                      },
                      {
                          "name": "cq:lastModified",
                          "value": "2023-06-28T12:24:51.815Z"
                      }
                  ],
                  "calendarArrayMetadata": []
              },
              "_variations": [
                  "defaultnewVariant644",
                  "defaultnewVariant973",
                  "newVariant402",
                  "newVariant1043",
                  "newVariant469",
                  "newVariant643",
                  "newVariant831",
                  "newVariant748"
              ],
              "_model": {
                  "_path": "/conf/pandora/settings/dam/cfm/models/react-mini-app-unified-paywall-v1-list",
                  "title": "react-mini-app-unified-paywall v1 list"
              },
              "_tags": []
          }
      ],
      "texts": [
          {
              "_path": "/content/dam/pandora/react-mini-app-unified-paywall_lrweb/v1/en/paywall_qa_28506/sub_heading",
              "_variation": "master",
              "text": {
                  "html": "<p>Unlock unlimited uses of premium features:</p>\n",
                  "markdown": "Unlock unlimited uses of premium features:\n\n ",
                  "plaintext": "Unlock unlimited uses of premium features:",
                  "json": [
                      {
                          "nodeType": "paragraph",
                          "content": [
                              {
                                  "nodeType": "text",
                                  "value": "Unlock unlimited uses of premium features:"
                              }
                          ]
                      }
                  ]
              },
              "fragmentId": "cd69d593-f146-4b68-89aa-49a3616f33e6",
              "locReady": false,
              "_metadata": {
                  "stringMetadata": [
                      {
                          "name": "title",
                          "value": "sub_heading"
                      },
                      {
                          "name": "description",
                          "value": "Default content fragment for Composable Text component"
                      }
                  ],
                  "stringArrayMetadata": [],
                  "intMetadata": [],
                  "intArrayMetadata": [],
                  "floatMetadata": [],
                  "floatArrayMetadata": [],
                  "booleanMetadata": [],
                  "booleanArrayMetadata": [],
                  "calendarMetadata": [
                      {
                          "name": "jcr:created",
                          "value": "2023-06-28T12:24:44.929Z"
                      },
                      {
                          "name": "cq:lastModified",
                          "value": "2023-06-28T12:24:51.618Z"
                      }
                  ],
                  "calendarArrayMetadata": []
              },
              "_variations": [
                  "defaultnewVariant644",
                  "defaultnewVariant973",
                  "newVariant402",
                  "newVariant1043",
                  "newVariant469",
                  "newVariant643",
                  "newVariant831",
                  "newVariant748"
              ],
              "_model": {
                  "_path": "/conf/pandora/settings/dam/cfm/models/react-mini-app-unified-paywall-v1-text",
                  "title": "react-mini-app-unified-paywall v1 text"
              },
              "_tags": []
          }
      ],
      "offerCard": [
          {
              "_path": "/content/dam/pandora/react-mini-app-unified-paywall/v1/en/main_template_two_plans/offer-card-0",
              "_variation": "master",
              "bannerColor": null,
              "bannerText": {
                  "html": null,
                  "markdown": null,
                  "plaintext": null,
                  "json": null
              },
              "buttonLabel": {
                  "html": "<p>Select plan</p>\n",
                  "markdown": "Select plan\n\n ",
                  "plaintext": "Select plan",
                  "json": [
                      {
                          "nodeType": "paragraph",
                          "content": [
                              {
                                  "nodeType": "text",
                                  "value": "Select plan"
                              }
                          ]
                      }
                  ]
              },
              "clickAction": "email",
              "listItems": [
                  {
                      "_path": "/content/dam/pandora/react-mini-app-unified-paywall/v1/en/main_template_two_plans/offer-card-0-list-item-1",
                      "_variation": "master",
                      "text": {
                          "html": "<p>Edit text and images in PDF files</p>\n",
                          "markdown": "Edit text and images in PDF files\n\n ",
                          "plaintext": "Edit text and images in PDF files",
                          "json": [
                              {
                                  "nodeType": "paragraph",
                                  "content": [
                                      {
                                          "nodeType": "text",
                                          "value": "Edit text and images in PDF files"
                                      }
                                  ]
                              }
                          ]
                      },
                      "locReady": false,
                      "_metadata": {
                          "stringMetadata": [
                              {
                                  "name": "title",
                                  "value": "Offer card 0 list item 1"
                              },
                              {
                                  "name": "description",
                                  "value": ""
                              }
                          ],
                          "stringArrayMetadata": [],
                          "intMetadata": [],
                          "intArrayMetadata": [],
                          "floatMetadata": [],
                          "floatArrayMetadata": [],
                          "booleanMetadata": [],
                          "booleanArrayMetadata": [],
                          "calendarMetadata": [
                              {
                                  "name": "jcr:created",
                                  "value": "2023-06-29T06:57:10.591Z"
                              },
                              {
                                  "name": "cq:lastModified",
                                  "value": "2023-06-23T19:24:11.927Z"
                              }
                          ],
                          "calendarArrayMetadata": []
                      },
                      "_variations": [],
                      "_model": {
                          "_path": "/conf/pandora/settings/dam/cfm/models/react-mini-app-unified-paywall-v1-listitem",
                          "title": "react-mini-app-unified-paywall v1 list_item"
                      },
                      "_tags": []
                  },
                  {
                      "_path": "/content/dam/pandora/react-mini-app-unified-paywall/v1/en/main_template_two_plans/offer-card-0-list-item-2",
                      "_variation": "master",
                      "text": {
                          "html": "<p>Convert PDF to Image, Microsoft Word, and Microsoft Excel</p>\n",
                          "markdown": "Convert PDF to Image, Microsoft Word, and Microsoft Excel\n\n ",
                          "plaintext": "Convert PDF to Image, Microsoft Word, and Microsoft Excel",
                          "json": [
                              {
                                  "nodeType": "paragraph",
                                  "content": [
                                      {
                                          "nodeType": "text",
                                          "value": "Convert PDF to Image, Microsoft Word, and Microsoft Excel"
                                      }
                                  ]
                              }
                          ]
                      },
                      "locReady": false,
                      "_metadata": {
                          "stringMetadata": [
                              {
                                  "name": "title",
                                  "value": "Offer card 0 list item 2"
                              },
                              {
                                  "name": "description",
                                  "value": ""
                              }
                          ],
                          "stringArrayMetadata": [],
                          "intMetadata": [],
                          "intArrayMetadata": [],
                          "floatMetadata": [],
                          "floatArrayMetadata": [],
                          "booleanMetadata": [],
                          "booleanArrayMetadata": [],
                          "calendarMetadata": [
                              {
                                  "name": "jcr:created",
                                  "value": "2023-06-29T06:57:10.657Z"
                              },
                              {
                                  "name": "cq:lastModified",
                                  "value": "2023-06-26T23:21:38.093Z"
                              }
                          ],
                          "calendarArrayMetadata": []
                      },
                      "_variations": [],
                      "_model": {
                          "_path": "/conf/pandora/settings/dam/cfm/models/react-mini-app-unified-paywall-v1-listitem",
                          "title": "react-mini-app-unified-paywall v1 list_item"
                      },
                      "_tags": []
                  },
                  {
                      "_path": "/content/dam/pandora/react-mini-app-unified-paywall/v1/en/main_template_two_plans/offer-card-0-list-item-3",
                      "_variation": "master",
                      "text": {
                          "html": "<p>Compress PDF files to reduce size</p>\n",
                          "markdown": "Compress PDF files to reduce size\n\n ",
                          "plaintext": "Compress PDF files to reduce size",
                          "json": [
                              {
                                  "nodeType": "paragraph",
                                  "content": [
                                      {
                                          "nodeType": "text",
                                          "value": "Compress PDF files to reduce size"
                                      }
                                  ]
                              }
                          ]
                      },
                      "locReady": false,
                      "_metadata": {
                          "stringMetadata": [
                              {
                                  "name": "title",
                                  "value": "Offer card 0 list item 3"
                              },
                              {
                                  "name": "description",
                                  "value": ""
                              }
                          ],
                          "stringArrayMetadata": [],
                          "intMetadata": [],
                          "intArrayMetadata": [],
                          "floatMetadata": [],
                          "floatArrayMetadata": [],
                          "booleanMetadata": [],
                          "booleanArrayMetadata": [],
                          "calendarMetadata": [
                              {
                                  "name": "jcr:created",
                                  "value": "2023-06-29T06:57:10.697Z"
                              },
                              {
                                  "name": "cq:lastModified",
                                  "value": "2023-06-26T23:23:18.677Z"
                              }
                          ],
                          "calendarArrayMetadata": []
                      },
                      "_variations": [],
                      "_model": {
                          "_path": "/conf/pandora/settings/dam/cfm/models/react-mini-app-unified-paywall-v1-listitem",
                          "title": "react-mini-app-unified-paywall v1 list_item"
                      },
                      "_tags": []
                  },
                  {
                      "_path": "/content/dam/pandora/react-mini-app-unified-paywall/v1/en/main_template_two_plans/offer-card-0-list-item-4",
                      "_variation": "master",
                      "text": {
                          "html": "<p>E-sign documents with ease</p>\n",
                          "markdown": "E-sign documents with ease\n\n ",
                          "plaintext": "E-sign documents with ease",
                          "json": [
                              {
                                  "nodeType": "paragraph",
                                  "content": [
                                      {
                                          "nodeType": "text",
                                          "value": "E-sign documents with ease"
                                      }
                                  ]
                              }
                          ]
                      },
                      "locReady": false,
                      "_metadata": {
                          "stringMetadata": [
                              {
                                  "name": "title",
                                  "value": "Offer card 0 list item 4"
                              },
                              {
                                  "name": "description",
                                  "value": ""
                              }
                          ],
                          "stringArrayMetadata": [],
                          "intMetadata": [],
                          "intArrayMetadata": [],
                          "floatMetadata": [],
                          "floatArrayMetadata": [],
                          "booleanMetadata": [],
                          "booleanArrayMetadata": [],
                          "calendarMetadata": [
                              {
                                  "name": "jcr:created",
                                  "value": "2023-06-29T06:57:10.736Z"
                              },
                              {
                                  "name": "cq:lastModified",
                                  "value": "2023-06-26T23:24:35.013Z"
                              }
                          ],
                          "calendarArrayMetadata": []
                      },
                      "_variations": [],
                      "_model": {
                          "_path": "/conf/pandora/settings/dam/cfm/models/react-mini-app-unified-paywall-v1-listitem",
                          "title": "react-mini-app-unified-paywall v1 list_item"
                      },
                      "_tags": []
                  }
              ],
              "priceText": {
                  "html": "<p>Starting at<br>\n{formattedPrice}</p>\n",
                  "markdown": "Starting at\n {formattedPrice}\n\n ",
                  "plaintext": "Starting at\n{formattedPrice}",
                  "json": [
                      {
                          "nodeType": "paragraph",
                          "content": [
                              {
                                  "nodeType": "text",
                                  "value": "Starting at"
                              },
                              {
                                  "nodeType": "line-break",
                                  "content": []
                              },
                              {
                                  "nodeType": "text",
                                  "value": " {formattedPrice}"
                              }
                          ]
                      }
                  ]
              },
              "productNameSubHeader": {
                  "html": "<p>For Individuals</p>\n",
                  "markdown": "For Individuals\n\n ",
                  "plaintext": "For Individuals",
                  "json": [
                      {
                          "nodeType": "paragraph",
                          "content": [
                              {
                                  "nodeType": "text",
                                  "value": "For Individuals"
                              }
                          ]
                      }
                  ]
              },
              "quantity": 1,
              "index": 0,
              "fragmentId": "offer_card_0",
              "locReady": false,
              "_metadata": {
                  "stringMetadata": [
                      {
                          "name": "title",
                          "value": "Offer card 0"
                      },
                      {
                          "name": "description",
                          "value": "Default content fragment for 2 plan template for offer card 0"
                      }
                  ],
                  "stringArrayMetadata": [],
                  "intMetadata": [],
                  "intArrayMetadata": [],
                  "floatMetadata": [],
                  "floatArrayMetadata": [],
                  "booleanMetadata": [],
                  "booleanArrayMetadata": [],
                  "calendarMetadata": [
                      {
                          "name": "jcr:created",
                          "value": "2023-06-29T06:57:10.549Z"
                      },
                      {
                          "name": "cq:lastModified",
                          "value": "2023-06-26T23:29:52.659Z"
                      }
                  ],
                  "calendarArrayMetadata": []
              },
              "_variations": [],
              "_model": {
                  "_path": "/conf/pandora/settings/dam/cfm/models/react-mini-app-unified-paywall-v1-offercard",
                  "title": "react-mini-app-unified-paywall v1 offer_card"
              },
              "_tags": []
          }
      ],
      "price": [
          {
              "_path": "/content/dam/pandora/react-price/v1/en/main/index",
              "_variation": "master",
              "recurrenceLabel": "{recurrenceTerm, select, MONTH {/mo} YEAR {/yr} other {}}",
              "recurrenceAriaLabel": "{recurrenceTerm, select, MONTH {per month} YEAR {per year} other {}}",
              "perUnitLabel": "{perUnit, select, LICENSE {per license} other {}}",
              "perUnitAriaLabel": "{perUnit, select, LICENSE {per license} other {}}",
              "freeLabel": "Free",
              "freeAriaLabel": "Free",
              "taxExclusiveLabel": "{taxTerm, select, GST {excl. GST} VAT {excl. VAT} TAX {excl. tax} other {}}",
              "taxInclusiveLabel": "{taxTerm, select, GST {incl. GST} VAT {incl. VAT} TAX {incl. tax} other {}}",
              "alternativePriceAriaLabel": "Alternatively at {alternativePrice}",
              "strikethroughAriaLabel": "Regularly at {strikethroughPrice}",
              "locReady": true,
              "_metadata": {
                  "stringMetadata": [
                      {
                          "name": "title",
                          "value": "index"
                      },
                      {
                          "name": "description",
                          "value": "Main content "
                      },
                      {
                          "name": "cq:lastReplicationAction",
                          "value": "Activate"
                      }
                  ],
                  "stringArrayMetadata": [],
                  "intMetadata": [],
                  "intArrayMetadata": [],
                  "floatMetadata": [],
                  "floatArrayMetadata": [],
                  "booleanMetadata": [],
                  "booleanArrayMetadata": [],
                  "calendarMetadata": [
                      {
                          "name": "jcr:created",
                          "value": "2022-09-26T07:15:28.724Z"
                      },
                      {
                          "name": "cq:lastPublished",
                          "value": "2022-08-07T14:34:37.870Z"
                      },
                      {
                          "name": "cq:lastModified",
                          "value": "2022-06-25T04:40:41.276Z"
                      }
                  ],
                  "calendarArrayMetadata": []
              },
              "_variations": [],
              "_model": {
                  "_path": "/conf/pandora/settings/dam/cfm/models/react-price-price-v1",
                  "title": "react-price v1 main "
              },
              "_tags": []
          }
      ],
      "fragmentId": "99e7106f-aedb-467b-b5a7-cf5aa6fe50b2",
      "_variations": [
          "defaultnewVariant644",
          "defaultnewVariant973",
          "newVariant402",
          "newVariant1043",
          "newVariant469",
          "newVariant643",
          "newVariant831",
          "newVariant748"
      ],
      "label": "master"
  }
};
const lt = [
    {
        "children": [
            {
                "children": [
                    {
                        "children": [
                            {
                                "children": [
                                    {
                                        "children": [],
                                        "id": "image_1_1_3_uuid",
                                        "type": "image",
                                        "componentprops": {
                                            "options": {
                                                "styleProps": {
                                                    "alignSelf": "center",
                                                    "objectFit": "cover",
                                                    "flex": 1
                                                }
                                            },
                                            "content": {
                                                "fragmentId": "48858298-899b-4a40-bba3-273069999852",
                                                "fragmentPath": "/content/dam/pandora/react-mini-app-unified-paywall_lrweb/v1/en/paywall_qa_28506/image"
                                            }
                                        }
                                    }
                                ],
                                "id": "view_1_1_2_uuid",
                                "type": "flex",
                                "componentprops": {
                                    "options": {
                                        "styleProps": {
                                            "alignItems": "center",
                                            "height": "100%"
                                        }
                                    }
                                }
                            }
                        ],
                        "id": "flex_1_1_1_uuid",
                        "type": "flex",
                        "componentprops": {
                            "options": {
                                "styleProps": {
                                    "flexGrow": 0,
                                    "alignItems": "stretch",
                                    "flexShrink": 1,
                                    "gap": "size-10",
                                    "flexBasis": "auto",
                                    "direction": "column",
                                    "height": "100%"
                                }
                            },
                            "animation": {}
                        }
                    }
                ],
                "id": "view_1_1_uuid",
                "type": "view",
                "componentprops": {
                    "options": {
                        "styleProps": {
                            "width": "50%",
                            "height": "100%"
                        }
                    }
                }
            },
            {
                "children": [
                    {
                        "children": [
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "children": [
                                                    {
                                                        "children": [],
                                                        "testId": "test-xyz",
                                                        "id": "heading_1_2_1_1_1_1_1_uuid",
                                                        "type": "heading",
                                                        "componentprops": {
                                                            "options": {
                                                                "styleProps": {
                                                                    "margin": 0,
                                                                    "level": 1,
                                                                    "gap": "size-0"
                                                                }
                                                            },
                                                            "content": {
                                                                "fragmentId": "877138e8-71e4-4c9b-ac5f-2d60af724af8",
                                                                "fragmentPath": "/content/dam/pandora/react-mini-app-unified-paywall_lrweb/v1/en/paywall_qa_28506/heading"
                                                            }
                                                        }
                                                    }
                                                ],
                                                "id": "view_1_2_1_1_1_1_uuid",
                                                "type": "view",
                                                "componentprops": {
                                                    "options": {
                                                        "styleProps": {}
                                                    }
                                                }
                                            },
                                            {
                                                "children": [
                                                    {
                                                        "children": [],
                                                        "testId": "test-xyz",
                                                        "id": "text_1_2_1_1_1_2_1_uuid",
                                                        "type": "text",
                                                        "componentprops": {
                                                            "options": {
                                                                "styleProps": {
                                                                    "gap": "size-200",
                                                                    "marginTop": "size-250"
                                                                }
                                                            },
                                                            "content": {
                                                                "fragmentId": "cd69d593-f146-4b68-89aa-49a3616f33e6",
                                                                "fragmentPath": "/content/dam/pandora/react-mini-app-unified-paywall_lrweb/v1/en/paywall_qa_28506/sub_heading"
                                                            }
                                                        }
                                                    }
                                                ],
                                                "id": "view_1_2_1_1_1_2_uuid",
                                                "type": "view",
                                                "componentprops": {
                                                    "options": {
                                                        "styleProps": {}
                                                    }
                                                }
                                            }
                                        ],
                                        "id": "flex_1_2_1_1_1_uuid",
                                        "type": "flex",
                                        "componentprops": {
                                            "options": {
                                                "styleProps": {
                                                    "flexGrow": 0,
                                                    "alignItems": "start",
                                                    "flexShrink": 1,
                                                    "gap": "size-150",
                                                    "flexBasis": "auto",
                                                    "marginBottom": 0,
                                                    "marginTop": 0,
                                                    "direction": "column"
                                                }
                                            }
                                        }
                                    }
                                ],
                                "id": "view_1_2_1_1_uuid",
                                "type": "view",
                                "componentprops": {
                                    "options": {
                                        "styleProps": {}
                                    }
                                }
                            },
                            {
                                "children": [
                                    {
                                        "children": [],
                                        "id": "list_1_2_1_2_1_uuid",
                                        "type": "list",
                                        "componentprops": {
                                            "options": {
                                                "styleProps": {
                                                    "gap": "size-200",
                                                    "direction": "column"
                                                }
                                            },
                                            "content": {
                                                "fragmentId": "2182b4b3-a3b9-42b3-a8c6-4f3cd3ba5764",
                                                "fragmentPath": "/content/dam/pandora/react-mini-app-unified-paywall_lrweb/v1/en/paywall_qa_28506/feature_list"
                                            }
                                        }
                                    }
                                ],
                                "id": "view_1_2_1_2_uuid",
                                "type": "view",
                                "componentprops": {
                                    "options": {
                                        "styleProps": {}
                                    }
                                }
                            },
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "children": [
                                                    {
                                                        "testId": "test-xyz-1",
                                                        "id": "button_1_2_1_3_1_1_1_uuid",
                                                        "type": "button",
                                                        "componentprops": {
                                                            "options": {
                                                                "styleProps": {
                                                                    "padding": "size-200",
                                                                    "alignSelf": "center",
                                                                    "gap": "size-200",
                                                                    "variant": "accent"
                                                                }
                                                            },
                                                            "content": {
                                                                "fragmentId": "e4a200e8-1965-404e-8549-aa2839894e69",
                                                                "fragmentPath": "/content/dam/pandora/react-mini-app-unified-paywall_lrweb/v1/en/paywall_qa_28506/cta_button"
                                                            }
                                                        }
                                                    }
                                                ],
                                                "id": "view_1_2_1_3_1_1_uuid",
                                                "type": "view",
                                                "componentprops": {
                                                    "options": {
                                                        "styleProps": {}
                                                    }
                                                }
                                            },
                                            {
                                                "children": [
                                                    {
                                                        "children": [],
                                                        "testId": "test-xyz-2",
                                                        "id": "button_1_2_1_3_1_2_1_uuid",
                                                        "type": "button",
                                                        "componentprops": {
                                                            "options": {
                                                                "styleProps": {
                                                                    "alignSelf": "center",
                                                                    "gap": "size-200",
                                                                    "variant": "secondary"
                                                                }
                                                            },
                                                            "content": {
                                                                "fragmentId": "66ecbcf3-8f91-4e5f-aa71-c0d57c470ee6",
                                                                "fragmentPath": "/content/dam/pandora/react-mini-app-unified-paywall_lrweb/v1/en/paywall_qa_28506/secondary_button"
                                                            }
                                                        }
                                                    }
                                                ],
                                                "id": "view_1_2_1_3_1_2_uuid",
                                                "type": "view",
                                                "componentprops": {
                                                    "options": {
                                                        "styleProps": {}
                                                    }
                                                }
                                            }
                                        ],
                                        "id": "flex_1_2_1_3_1_uuid",
                                        "type": "flex",
                                        "componentprops": {
                                            "options": {
                                                "styleProps": {
                                                    "flexGrow": 0,
                                                    "alignItems": "stretch",
                                                    "flexShrink": 1,
                                                    "gap": "size-150",
                                                    "flexBasis": "auto",
                                                    "marginTop": "size-150",
                                                    "justifyContent": "left",
                                                    "direction": "row"
                                                }
                                            }
                                        }
                                    }
                                ],
                                "id": "flex_1_2_1_3_uuid",
                                "type": "flex",
                                "componentprops": {
                                    "options": {
                                        "styleProps": {}
                                    }
                                }
                            }
                        ],
                        "id": "flex_1_2_1_uuid",
                        "type": "flex",
                        "componentprops": {
                            "options": {
                                "styleProps": {
                                    "flexGrow": 0,
                                    "alignItems": "stretch",
                                    "flexShrink": 1,
                                    "gap": "size-250",
                                    "flexBasis": "auto",
                                    "direction": "column"
                                }
                            }
                        }
                    }
                ],
                "id": "view_1_2_uuid",
                "type": "view",
                "componentprops": {
                    "options": {
                        "styleProps": {
                            "margin": 0,
                            "marginEnd": "size-500",
                            "marginStart": "size-500",
                            "flex": 1,
                            "width": "50%",
                            "justifyContent": "center",
                            "direction": "column",
                            "height": "100%"
                        }
                    }
                }
            }
        ],
        "id": "flex_1_uuid",
        "type": "flex",
        "componentprops": {
            "options": {
                "styleProps": {
                    "flexGrow": 0,
                    "alignItems": "center",
                    "flexShrink": 1,
                    "flexBasis": "auto",
                    "direction": "row",
                    "height": "100%",
                    "maxWidth": "100%"
                }
            },
            "animation": {}
        }
    }
];
const defaultContext = '{\n\t"formattedPrice": "US$15.99 per month",\n\t"productName": "Photoshop",\n\t"productDescription": "Creative Cloud single-app membership for Photoshop",\n\t"promotionTermLength": 1,\n\t"promotionTermUnit": "Month"\n}';

window.MyNamespace = {};

window.MyNamespace.data = dt;
window.MyNamespace.layout = lt;
window.MyNamespace.context = defaultContext;

export default function init(el) {
  import('/libs/deps/pandora-bundle.js');
  document.addEventListener('paywallLoaded', (data) => {
    setEditButtons();
  });
}

const setEditButtons = () => {
  const editButtons = document.querySelectorAll('.action-button');
  const handleClick = () => {
    const dform = document.querySelector('.dform');
    dform.classList.add('show-dform-edit');
  }
  editButtons.forEach(button => {
    button.addEventListener('click', handleClick);
  });
}
