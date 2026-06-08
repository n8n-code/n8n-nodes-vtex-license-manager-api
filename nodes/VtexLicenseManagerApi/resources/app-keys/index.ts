import type { INodeProperties } from 'n8n-workflow';

export const appKeysDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"App Keys"
					]
				}
			},
			"options": [
				{
					"name": "Getappkeysfromaccount",
					"value": "Getappkeysfromaccount",
					"action": "Get appKeys from account",
					"description": "Gets all application keys from an account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/vlm/appkeys"
						}
					}
				},
				{
					"name": "Createnewappkey",
					"value": "Createnewappkey",
					"action": "Create new appkey",
					"description": "Creates a new pair of `appKey` and `appToken`.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/vlm/appkeys"
						}
					}
				},
				{
					"name": "Updateappkey",
					"value": "Updateappkey",
					"action": "Update appkey",
					"description": "Activates or deactivates an `appKey` by its ID.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/vlm/appkeys/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/vlm/appkeys",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Keys"
					],
					"operation": [
						"Getappkeysfromaccount"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "The media type of the body of the request. Default value for license manager protocol is application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Keys"
					],
					"operation": [
						"Getappkeysfromaccount"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Keys"
					],
					"operation": [
						"Getappkeysfromaccount"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Keys"
					],
					"operation": [
						"Getappkeysfromaccount"
					]
				}
			}
		},
		{
			"displayName": "POST /api/vlm/appkeys",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Keys"
					],
					"operation": [
						"Createnewappkey"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "",
			"description": "Label for application key",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Keys"
					],
					"operation": [
						"Createnewappkey"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Keys"
					],
					"operation": [
						"Createnewappkey"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Keys"
					],
					"operation": [
						"Createnewappkey"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/vlm/appkeys/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Keys"
					],
					"operation": [
						"Updateappkey"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID from the appKey which will be updated",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"App Keys"
					],
					"operation": [
						"Updateappkey"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Is Active",
			"name": "isActive",
			"type": "boolean",
			"default": true,
			"description": "If the application key should be active or inactive",
			"routing": {
				"send": {
					"property": "isActive",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Keys"
					],
					"operation": [
						"Updateappkey"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Keys"
					],
					"operation": [
						"Updateappkey"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Keys"
					],
					"operation": [
						"Updateappkey"
					]
				}
			}
		},
];
