package com.thinkbiganalytics.feedmgr.rest.model;
/*-
 * #%L
 * thinkbig-feed-manager-rest-model
 * %%
 * Copyright (C) 2017 ThinkBig Analytics
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */
import org.apache.nifi.web.api.dto.ConnectionDTO;

import java.util.List;
import java.util.Set;

public class TemplateRemoteInputPortConnections {

        List<ConnectionDTO> existingRemoteConnectionsToTemplate;
        Set<String> existingRemoteInputPortNames;

        public TemplateRemoteInputPortConnections(List < ConnectionDTO > existingRemoteConnectionsToTemplate,
                                                         Set<String> existingRemoteInputPortNames) {
            this.existingRemoteConnectionsToTemplate = existingRemoteConnectionsToTemplate;
            this.existingRemoteInputPortNames = existingRemoteInputPortNames;
        }

        public List<ConnectionDTO> getExistingRemoteConnectionsToTemplate() {
            return existingRemoteConnectionsToTemplate;
        }

        public Set<String> getExistingRemoteInputPortNames() {
            return existingRemoteInputPortNames;
        }


}