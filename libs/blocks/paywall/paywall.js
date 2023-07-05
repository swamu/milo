import { createTag, getConfig, loadScript } from '../../utils/utils.js';

const lt1 = [
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
window.MyNamespace.context = defaultContext;

export default async function init(el) {
  const urls = [
    '/drafts/sarangi/hack/content.json',
    '/drafts/sarangi/hack/layout.json',
  ];
  
  const fetchPromises = urls.map(url => fetch(url));

  Promise.all(fetchPromises)
    .then(responses => {
      // Process the responses
      const dataPromises = responses.map(response => {
        if (response.ok) {
          return response.json();
        } else {
          console.error('Error:', response.status);
          return null;
        }
      });

      return Promise.all(dataPromises);
    })
    .then(dataArray => {
      const dt = {master: {label: "master"}};
      dataArray[0].data.forEach(function(obj){
        if(!dt.master[obj.key]) {
          dt.master[obj.key] = [];
        }
        dt.master[obj.key].push(JSON.parse(obj.value));
      });
      window.MyNamespace.data = dt;
      let index = 0;
      if(el.classList.contains('right')) {
        index = 1;
      }
      const lt = JSON.parse(dataArray[1].data[index].data);
      window.MyNamespace.layout = lt;
      import('/libs/deps/pandora-bundle.js');
      document.addEventListener('paywallLoaded', (data) => {
        setEditButtons();
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });

}

const setEditButtons = () => {
  const editButtons = document.querySelectorAll('.action-button');
  const handleClick = (e) => {
    const dform = document.querySelector('.dform');
    dform.classList.add('show-dform-edit');
    const pandoraElementType = e.target.parentElement.parentElement.nextElementSibling.getAttribute('data-testid').substring(8);
    const editPandoraEvent = new CustomEvent('editPandoraElement', {
        'detail' : { type: pandoraElementType }
    });
    document.dispatchEvent(editPandoraEvent);
  }
  editButtons.forEach(button => {
    button.addEventListener('click', handleClick);
  });
}
