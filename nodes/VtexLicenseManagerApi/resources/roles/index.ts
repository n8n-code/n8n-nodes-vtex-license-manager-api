import type { INodeProperties } from 'n8n-workflow';

export const rolesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Roles"
					]
				}
			},
			"options": [
				{
					"name": "Get List Roles",
					"value": "Get List Roles",
					"action": "Get List of Roles",
					"description": "Returns a list of available roles. The response is divided in pages. The query parameter `numItems` defines the number of items in each page, and consequently the amount of pages for the whole list.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/license-manager/site/pvt/roles/list/paged"
						}
					}
				},
				{
					"name": "Get Rolesby User",
					"value": "Get Rolesby User",
					"action": "Get Roles by User/appKey",
					"description": "Gets roles of a particular user or application key.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/license-manager/users/{{$parameter[\"userId\"]}}/roles"
						}
					}
				},
				{
					"name": "Put Rolesin User",
					"value": "Put Rolesin User",
					"action": "Put Roles in User/appKey",
					"description": "Allows you to add roles to a particular user or application key by specifying the list of roles' IDs on the request's body.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/license-manager/users/{{$parameter[\"userId\"]}}/roles"
						}
					}
				},
				{
					"name": "Remove Rolefrom User",
					"value": "Remove Rolefrom User",
					"action": "Remove Role from User/appKey",
					"description": "Allows you to remove a role from a specific user or application key. This method only allows the removal of one role per request. The role's ID must be specified on the request path, not on the request body.\n\r\n\r> Note that a successful response returns a `204` response with an empty body. A deletion on a role or user that does not exist will also return a `204`. Thus, this method should not be used to verify the existence of a specific user or role.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/license-manager/users/{{$parameter[\"userId\"]}}/roles/{{$parameter[\"roleId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/license-manager/site/pvt/roles/list/paged",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Roles"
					],
					"operation": [
						"Get List Roles"
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
						"Roles"
					],
					"operation": [
						"Get List Roles"
					]
				}
			}
		},
		{
			"displayName": "Num Items",
			"name": "numItems",
			"description": "Number of items in the returned page",
			"default": 10,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "numItems",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Roles"
					],
					"operation": [
						"Get List Roles"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Which page from the whole list will be returned",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pageNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Roles"
					],
					"operation": [
						"Get List Roles"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Chooses the field that the list will be sorted by",
			"default": "id",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Roles"
					],
					"operation": [
						"Get List Roles"
					]
				}
			}
		},
		{
			"displayName": "Sort Type",
			"name": "sortType",
			"description": "Defines the sorting order. ASC is used for ascendant order. DSC is used for descendant order",
			"default": "ASC",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sortType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Roles"
					],
					"operation": [
						"Get List Roles"
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
						"Roles"
					],
					"operation": [
						"Get List Roles"
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
						"Roles"
					],
					"operation": [
						"Get List Roles"
					]
				}
			}
		},
		{
			"displayName": "GET /api/license-manager/users/{userId}/roles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Roles"
					],
					"operation": [
						"Get Rolesby User"
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
						"Roles"
					],
					"operation": [
						"Get Rolesby User"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "userId",
			"required": true,
			"description": "ID corresponding to the user",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Roles"
					],
					"operation": [
						"Get Rolesby User"
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
						"Roles"
					],
					"operation": [
						"Get Rolesby User"
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
						"Roles"
					],
					"operation": [
						"Get Rolesby User"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/license-manager/users/{userId}/roles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Roles"
					],
					"operation": [
						"Put Rolesin User"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "userId",
			"required": true,
			"description": "ID corresponding to the user",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Roles"
					],
					"operation": [
						"Put Rolesin User"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "number",
			"default": 0,
			"routing": {
				"request": {
					"body": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Roles"
					],
					"operation": [
						"Put Rolesin User"
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
						"Roles"
					],
					"operation": [
						"Put Rolesin User"
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
						"Roles"
					],
					"operation": [
						"Put Rolesin User"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/license-manager/users/{userId}/roles/{roleId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Roles"
					],
					"operation": [
						"Remove Rolefrom User"
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
						"Roles"
					],
					"operation": [
						"Remove Rolefrom User"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "userId",
			"required": true,
			"description": "ID corresponding to the user",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Roles"
					],
					"operation": [
						"Remove Rolefrom User"
					]
				}
			}
		},
		{
			"displayName": "Role Id",
			"name": "roleId",
			"required": true,
			"description": "ID of the role which will be removed from the user",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Roles"
					],
					"operation": [
						"Remove Rolefrom User"
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
						"Roles"
					],
					"operation": [
						"Remove Rolefrom User"
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
						"Roles"
					],
					"operation": [
						"Remove Rolefrom User"
					]
				}
			}
		},
];
