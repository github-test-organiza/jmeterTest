/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 155.0, "minX": 0.0, "maxY": 535.0, "series": [{"data": [[0.0, 155.0], [0.1, 155.0], [0.2, 155.0], [0.3, 155.0], [0.4, 155.0], [0.5, 155.0], [0.6, 155.0], [0.7, 155.0], [0.8, 155.0], [0.9, 155.0], [1.0, 155.0], [1.1, 155.0], [1.2, 155.0], [1.3, 155.0], [1.4, 155.0], [1.5, 155.0], [1.6, 155.0], [1.7, 155.0], [1.8, 155.0], [1.9, 155.0], [2.0, 155.0], [2.1, 155.0], [2.2, 155.0], [2.3, 155.0], [2.4, 155.0], [2.5, 155.0], [2.6, 155.0], [2.7, 155.0], [2.8, 155.0], [2.9, 155.0], [3.0, 155.0], [3.1, 155.0], [3.2, 155.0], [3.3, 155.0], [3.4, 155.0], [3.5, 155.0], [3.6, 155.0], [3.7, 155.0], [3.8, 155.0], [3.9, 155.0], [4.0, 155.0], [4.1, 155.0], [4.2, 155.0], [4.3, 155.0], [4.4, 155.0], [4.5, 155.0], [4.6, 155.0], [4.7, 155.0], [4.8, 155.0], [4.9, 155.0], [5.0, 155.0], [5.1, 155.0], [5.2, 155.0], [5.3, 155.0], [5.4, 155.0], [5.5, 155.0], [5.6, 155.0], [5.7, 155.0], [5.8, 155.0], [5.9, 155.0], [6.0, 155.0], [6.1, 155.0], [6.2, 155.0], [6.3, 155.0], [6.4, 155.0], [6.5, 155.0], [6.6, 155.0], [6.7, 155.0], [6.8, 155.0], [6.9, 155.0], [7.0, 155.0], [7.1, 155.0], [7.2, 155.0], [7.3, 155.0], [7.4, 155.0], [7.5, 155.0], [7.6, 155.0], [7.7, 157.0], [7.8, 157.0], [7.9, 157.0], [8.0, 157.0], [8.1, 157.0], [8.2, 157.0], [8.3, 157.0], [8.4, 157.0], [8.5, 157.0], [8.6, 157.0], [8.7, 157.0], [8.8, 157.0], [8.9, 157.0], [9.0, 157.0], [9.1, 157.0], [9.2, 157.0], [9.3, 157.0], [9.4, 157.0], [9.5, 157.0], [9.6, 157.0], [9.7, 157.0], [9.8, 157.0], [9.9, 157.0], [10.0, 157.0], [10.1, 157.0], [10.2, 157.0], [10.3, 157.0], [10.4, 157.0], [10.5, 157.0], [10.6, 157.0], [10.7, 157.0], [10.8, 157.0], [10.9, 157.0], [11.0, 157.0], [11.1, 157.0], [11.2, 157.0], [11.3, 157.0], [11.4, 157.0], [11.5, 157.0], [11.6, 157.0], [11.7, 157.0], [11.8, 157.0], [11.9, 157.0], [12.0, 157.0], [12.1, 157.0], [12.2, 157.0], [12.3, 157.0], [12.4, 157.0], [12.5, 157.0], [12.6, 157.0], [12.7, 157.0], [12.8, 157.0], [12.9, 157.0], [13.0, 157.0], [13.1, 157.0], [13.2, 157.0], [13.3, 157.0], [13.4, 157.0], [13.5, 157.0], [13.6, 157.0], [13.7, 157.0], [13.8, 157.0], [13.9, 157.0], [14.0, 157.0], [14.1, 157.0], [14.2, 157.0], [14.3, 157.0], [14.4, 157.0], [14.5, 157.0], [14.6, 157.0], [14.7, 157.0], [14.8, 157.0], [14.9, 157.0], [15.0, 157.0], [15.1, 157.0], [15.2, 157.0], [15.3, 157.0], [15.4, 158.0], [15.5, 158.0], [15.6, 158.0], [15.7, 158.0], [15.8, 158.0], [15.9, 158.0], [16.0, 158.0], [16.1, 158.0], [16.2, 158.0], [16.3, 158.0], [16.4, 158.0], [16.5, 158.0], [16.6, 158.0], [16.7, 158.0], [16.8, 158.0], [16.9, 158.0], [17.0, 158.0], [17.1, 158.0], [17.2, 158.0], [17.3, 158.0], [17.4, 158.0], [17.5, 158.0], [17.6, 158.0], [17.7, 158.0], [17.8, 158.0], [17.9, 158.0], [18.0, 158.0], [18.1, 158.0], [18.2, 158.0], [18.3, 158.0], [18.4, 158.0], [18.5, 158.0], [18.6, 158.0], [18.7, 158.0], [18.8, 158.0], [18.9, 158.0], [19.0, 158.0], [19.1, 158.0], [19.2, 158.0], [19.3, 158.0], [19.4, 158.0], [19.5, 158.0], [19.6, 158.0], [19.7, 158.0], [19.8, 158.0], [19.9, 158.0], [20.0, 158.0], [20.1, 158.0], [20.2, 158.0], [20.3, 158.0], [20.4, 158.0], [20.5, 158.0], [20.6, 158.0], [20.7, 158.0], [20.8, 158.0], [20.9, 158.0], [21.0, 158.0], [21.1, 158.0], [21.2, 158.0], [21.3, 158.0], [21.4, 158.0], [21.5, 158.0], [21.6, 158.0], [21.7, 158.0], [21.8, 158.0], [21.9, 158.0], [22.0, 158.0], [22.1, 158.0], [22.2, 158.0], [22.3, 158.0], [22.4, 158.0], [22.5, 158.0], [22.6, 158.0], [22.7, 158.0], [22.8, 158.0], [22.9, 158.0], [23.0, 158.0], [23.1, 159.0], [23.2, 159.0], [23.3, 159.0], [23.4, 159.0], [23.5, 159.0], [23.6, 159.0], [23.7, 159.0], [23.8, 159.0], [23.9, 159.0], [24.0, 159.0], [24.1, 159.0], [24.2, 159.0], [24.3, 159.0], [24.4, 159.0], [24.5, 159.0], [24.6, 159.0], [24.7, 159.0], [24.8, 159.0], [24.9, 159.0], [25.0, 159.0], [25.1, 159.0], [25.2, 159.0], [25.3, 159.0], [25.4, 159.0], [25.5, 159.0], [25.6, 159.0], [25.7, 159.0], [25.8, 159.0], [25.9, 159.0], [26.0, 159.0], [26.1, 159.0], [26.2, 159.0], [26.3, 159.0], [26.4, 159.0], [26.5, 159.0], [26.6, 159.0], [26.7, 159.0], [26.8, 159.0], [26.9, 159.0], [27.0, 159.0], [27.1, 159.0], [27.2, 159.0], [27.3, 159.0], [27.4, 159.0], [27.5, 159.0], [27.6, 159.0], [27.7, 159.0], [27.8, 159.0], [27.9, 159.0], [28.0, 159.0], [28.1, 159.0], [28.2, 159.0], [28.3, 159.0], [28.4, 159.0], [28.5, 159.0], [28.6, 159.0], [28.7, 159.0], [28.8, 159.0], [28.9, 159.0], [29.0, 159.0], [29.1, 159.0], [29.2, 159.0], [29.3, 159.0], [29.4, 159.0], [29.5, 159.0], [29.6, 159.0], [29.7, 159.0], [29.8, 159.0], [29.9, 159.0], [30.0, 159.0], [30.1, 159.0], [30.2, 159.0], [30.3, 159.0], [30.4, 159.0], [30.5, 159.0], [30.6, 159.0], [30.7, 159.0], [30.8, 164.0], [30.9, 164.0], [31.0, 164.0], [31.1, 164.0], [31.2, 164.0], [31.3, 164.0], [31.4, 164.0], [31.5, 164.0], [31.6, 164.0], [31.7, 164.0], [31.8, 164.0], [31.9, 164.0], [32.0, 164.0], [32.1, 164.0], [32.2, 164.0], [32.3, 164.0], [32.4, 164.0], [32.5, 164.0], [32.6, 164.0], [32.7, 164.0], [32.8, 164.0], [32.9, 164.0], [33.0, 164.0], [33.1, 164.0], [33.2, 164.0], [33.3, 164.0], [33.4, 164.0], [33.5, 164.0], [33.6, 164.0], [33.7, 164.0], [33.8, 164.0], [33.9, 164.0], [34.0, 164.0], [34.1, 164.0], [34.2, 164.0], [34.3, 164.0], [34.4, 164.0], [34.5, 164.0], [34.6, 164.0], [34.7, 164.0], [34.8, 164.0], [34.9, 164.0], [35.0, 164.0], [35.1, 164.0], [35.2, 164.0], [35.3, 164.0], [35.4, 164.0], [35.5, 164.0], [35.6, 164.0], [35.7, 164.0], [35.8, 164.0], [35.9, 164.0], [36.0, 164.0], [36.1, 164.0], [36.2, 164.0], [36.3, 164.0], [36.4, 164.0], [36.5, 164.0], [36.6, 164.0], [36.7, 164.0], [36.8, 164.0], [36.9, 164.0], [37.0, 164.0], [37.1, 164.0], [37.2, 164.0], [37.3, 164.0], [37.4, 164.0], [37.5, 164.0], [37.6, 164.0], [37.7, 164.0], [37.8, 164.0], [37.9, 164.0], [38.0, 164.0], [38.1, 164.0], [38.2, 164.0], [38.3, 164.0], [38.4, 164.0], [38.5, 165.0], [38.6, 165.0], [38.7, 165.0], [38.8, 165.0], [38.9, 165.0], [39.0, 165.0], [39.1, 165.0], [39.2, 165.0], [39.3, 165.0], [39.4, 165.0], [39.5, 165.0], [39.6, 165.0], [39.7, 165.0], [39.8, 165.0], [39.9, 165.0], [40.0, 165.0], [40.1, 165.0], [40.2, 165.0], [40.3, 165.0], [40.4, 165.0], [40.5, 165.0], [40.6, 165.0], [40.7, 165.0], [40.8, 165.0], [40.9, 165.0], [41.0, 165.0], [41.1, 165.0], [41.2, 165.0], [41.3, 165.0], [41.4, 165.0], [41.5, 165.0], [41.6, 165.0], [41.7, 165.0], [41.8, 165.0], [41.9, 165.0], [42.0, 165.0], [42.1, 165.0], [42.2, 165.0], [42.3, 165.0], [42.4, 165.0], [42.5, 165.0], [42.6, 165.0], [42.7, 165.0], [42.8, 165.0], [42.9, 165.0], [43.0, 165.0], [43.1, 165.0], [43.2, 165.0], [43.3, 165.0], [43.4, 165.0], [43.5, 165.0], [43.6, 165.0], [43.7, 165.0], [43.8, 165.0], [43.9, 165.0], [44.0, 165.0], [44.1, 165.0], [44.2, 165.0], [44.3, 165.0], [44.4, 165.0], [44.5, 165.0], [44.6, 165.0], [44.7, 165.0], [44.8, 165.0], [44.9, 165.0], [45.0, 165.0], [45.1, 165.0], [45.2, 165.0], [45.3, 165.0], [45.4, 165.0], [45.5, 165.0], [45.6, 165.0], [45.7, 165.0], [45.8, 165.0], [45.9, 165.0], [46.0, 165.0], [46.1, 165.0], [46.2, 166.0], [46.3, 166.0], [46.4, 166.0], [46.5, 166.0], [46.6, 166.0], [46.7, 166.0], [46.8, 166.0], [46.9, 166.0], [47.0, 166.0], [47.1, 166.0], [47.2, 166.0], [47.3, 166.0], [47.4, 166.0], [47.5, 166.0], [47.6, 166.0], [47.7, 166.0], [47.8, 166.0], [47.9, 166.0], [48.0, 166.0], [48.1, 166.0], [48.2, 166.0], [48.3, 166.0], [48.4, 166.0], [48.5, 166.0], [48.6, 166.0], [48.7, 166.0], [48.8, 166.0], [48.9, 166.0], [49.0, 166.0], [49.1, 166.0], [49.2, 166.0], [49.3, 166.0], [49.4, 166.0], [49.5, 166.0], [49.6, 166.0], [49.7, 166.0], [49.8, 166.0], [49.9, 166.0], [50.0, 166.0], [50.1, 166.0], [50.2, 166.0], [50.3, 166.0], [50.4, 166.0], [50.5, 166.0], [50.6, 166.0], [50.7, 166.0], [50.8, 166.0], [50.9, 166.0], [51.0, 166.0], [51.1, 166.0], [51.2, 166.0], [51.3, 166.0], [51.4, 166.0], [51.5, 166.0], [51.6, 166.0], [51.7, 166.0], [51.8, 166.0], [51.9, 166.0], [52.0, 166.0], [52.1, 166.0], [52.2, 166.0], [52.3, 166.0], [52.4, 166.0], [52.5, 166.0], [52.6, 166.0], [52.7, 166.0], [52.8, 166.0], [52.9, 166.0], [53.0, 166.0], [53.1, 166.0], [53.2, 166.0], [53.3, 166.0], [53.4, 166.0], [53.5, 166.0], [53.6, 166.0], [53.7, 166.0], [53.8, 166.0], [53.9, 167.0], [54.0, 167.0], [54.1, 167.0], [54.2, 167.0], [54.3, 167.0], [54.4, 167.0], [54.5, 167.0], [54.6, 167.0], [54.7, 167.0], [54.8, 167.0], [54.9, 167.0], [55.0, 167.0], [55.1, 167.0], [55.2, 167.0], [55.3, 167.0], [55.4, 167.0], [55.5, 167.0], [55.6, 167.0], [55.7, 167.0], [55.8, 167.0], [55.9, 167.0], [56.0, 167.0], [56.1, 167.0], [56.2, 167.0], [56.3, 167.0], [56.4, 167.0], [56.5, 167.0], [56.6, 167.0], [56.7, 167.0], [56.8, 167.0], [56.9, 167.0], [57.0, 167.0], [57.1, 167.0], [57.2, 167.0], [57.3, 167.0], [57.4, 167.0], [57.5, 167.0], [57.6, 167.0], [57.7, 167.0], [57.8, 167.0], [57.9, 167.0], [58.0, 167.0], [58.1, 167.0], [58.2, 167.0], [58.3, 167.0], [58.4, 167.0], [58.5, 167.0], [58.6, 167.0], [58.7, 167.0], [58.8, 167.0], [58.9, 167.0], [59.0, 167.0], [59.1, 167.0], [59.2, 167.0], [59.3, 167.0], [59.4, 167.0], [59.5, 167.0], [59.6, 167.0], [59.7, 167.0], [59.8, 167.0], [59.9, 167.0], [60.0, 167.0], [60.1, 167.0], [60.2, 167.0], [60.3, 167.0], [60.4, 167.0], [60.5, 167.0], [60.6, 167.0], [60.7, 167.0], [60.8, 167.0], [60.9, 167.0], [61.0, 167.0], [61.1, 167.0], [61.2, 167.0], [61.3, 167.0], [61.4, 167.0], [61.5, 167.0], [61.6, 168.0], [61.7, 168.0], [61.8, 168.0], [61.9, 168.0], [62.0, 168.0], [62.1, 168.0], [62.2, 168.0], [62.3, 168.0], [62.4, 168.0], [62.5, 168.0], [62.6, 168.0], [62.7, 168.0], [62.8, 168.0], [62.9, 168.0], [63.0, 168.0], [63.1, 168.0], [63.2, 168.0], [63.3, 168.0], [63.4, 168.0], [63.5, 168.0], [63.6, 168.0], [63.7, 168.0], [63.8, 168.0], [63.9, 168.0], [64.0, 168.0], [64.1, 168.0], [64.2, 168.0], [64.3, 168.0], [64.4, 168.0], [64.5, 168.0], [64.6, 168.0], [64.7, 168.0], [64.8, 168.0], [64.9, 168.0], [65.0, 168.0], [65.1, 168.0], [65.2, 168.0], [65.3, 168.0], [65.4, 168.0], [65.5, 168.0], [65.6, 168.0], [65.7, 168.0], [65.8, 168.0], [65.9, 168.0], [66.0, 168.0], [66.1, 168.0], [66.2, 168.0], [66.3, 168.0], [66.4, 168.0], [66.5, 168.0], [66.6, 168.0], [66.7, 168.0], [66.8, 168.0], [66.9, 168.0], [67.0, 168.0], [67.1, 168.0], [67.2, 168.0], [67.3, 168.0], [67.4, 168.0], [67.5, 168.0], [67.6, 168.0], [67.7, 168.0], [67.8, 168.0], [67.9, 168.0], [68.0, 168.0], [68.1, 168.0], [68.2, 168.0], [68.3, 168.0], [68.4, 168.0], [68.5, 168.0], [68.6, 168.0], [68.7, 168.0], [68.8, 168.0], [68.9, 168.0], [69.0, 168.0], [69.1, 168.0], [69.2, 168.0], [69.3, 171.0], [69.4, 171.0], [69.5, 171.0], [69.6, 171.0], [69.7, 171.0], [69.8, 171.0], [69.9, 171.0], [70.0, 171.0], [70.1, 171.0], [70.2, 171.0], [70.3, 171.0], [70.4, 171.0], [70.5, 171.0], [70.6, 171.0], [70.7, 171.0], [70.8, 171.0], [70.9, 171.0], [71.0, 171.0], [71.1, 171.0], [71.2, 171.0], [71.3, 171.0], [71.4, 171.0], [71.5, 171.0], [71.6, 171.0], [71.7, 171.0], [71.8, 171.0], [71.9, 171.0], [72.0, 171.0], [72.1, 171.0], [72.2, 171.0], [72.3, 171.0], [72.4, 171.0], [72.5, 171.0], [72.6, 171.0], [72.7, 171.0], [72.8, 171.0], [72.9, 171.0], [73.0, 171.0], [73.1, 171.0], [73.2, 171.0], [73.3, 171.0], [73.4, 171.0], [73.5, 171.0], [73.6, 171.0], [73.7, 171.0], [73.8, 171.0], [73.9, 171.0], [74.0, 171.0], [74.1, 171.0], [74.2, 171.0], [74.3, 171.0], [74.4, 171.0], [74.5, 171.0], [74.6, 171.0], [74.7, 171.0], [74.8, 171.0], [74.9, 171.0], [75.0, 171.0], [75.1, 171.0], [75.2, 171.0], [75.3, 171.0], [75.4, 171.0], [75.5, 171.0], [75.6, 171.0], [75.7, 171.0], [75.8, 171.0], [75.9, 171.0], [76.0, 171.0], [76.1, 171.0], [76.2, 171.0], [76.3, 171.0], [76.4, 171.0], [76.5, 171.0], [76.6, 171.0], [76.7, 171.0], [76.8, 171.0], [76.9, 171.0], [77.0, 172.0], [77.1, 172.0], [77.2, 172.0], [77.3, 172.0], [77.4, 172.0], [77.5, 172.0], [77.6, 172.0], [77.7, 172.0], [77.8, 172.0], [77.9, 172.0], [78.0, 172.0], [78.1, 172.0], [78.2, 172.0], [78.3, 172.0], [78.4, 172.0], [78.5, 172.0], [78.6, 172.0], [78.7, 172.0], [78.8, 172.0], [78.9, 172.0], [79.0, 172.0], [79.1, 172.0], [79.2, 172.0], [79.3, 172.0], [79.4, 172.0], [79.5, 172.0], [79.6, 172.0], [79.7, 172.0], [79.8, 172.0], [79.9, 172.0], [80.0, 172.0], [80.1, 172.0], [80.2, 172.0], [80.3, 172.0], [80.4, 172.0], [80.5, 172.0], [80.6, 172.0], [80.7, 172.0], [80.8, 172.0], [80.9, 172.0], [81.0, 172.0], [81.1, 172.0], [81.2, 172.0], [81.3, 172.0], [81.4, 172.0], [81.5, 172.0], [81.6, 172.0], [81.7, 172.0], [81.8, 172.0], [81.9, 172.0], [82.0, 172.0], [82.1, 172.0], [82.2, 172.0], [82.3, 172.0], [82.4, 172.0], [82.5, 172.0], [82.6, 172.0], [82.7, 172.0], [82.8, 172.0], [82.9, 172.0], [83.0, 172.0], [83.1, 172.0], [83.2, 172.0], [83.3, 172.0], [83.4, 172.0], [83.5, 172.0], [83.6, 172.0], [83.7, 172.0], [83.8, 172.0], [83.9, 172.0], [84.0, 172.0], [84.1, 172.0], [84.2, 172.0], [84.3, 172.0], [84.4, 172.0], [84.5, 172.0], [84.6, 172.0], [84.7, 220.0], [84.8, 220.0], [84.9, 220.0], [85.0, 220.0], [85.1, 220.0], [85.2, 220.0], [85.3, 220.0], [85.4, 220.0], [85.5, 220.0], [85.6, 220.0], [85.7, 220.0], [85.8, 220.0], [85.9, 220.0], [86.0, 220.0], [86.1, 220.0], [86.2, 220.0], [86.3, 220.0], [86.4, 220.0], [86.5, 220.0], [86.6, 220.0], [86.7, 220.0], [86.8, 220.0], [86.9, 220.0], [87.0, 220.0], [87.1, 220.0], [87.2, 220.0], [87.3, 220.0], [87.4, 220.0], [87.5, 220.0], [87.6, 220.0], [87.7, 220.0], [87.8, 220.0], [87.9, 220.0], [88.0, 220.0], [88.1, 220.0], [88.2, 220.0], [88.3, 220.0], [88.4, 220.0], [88.5, 220.0], [88.6, 220.0], [88.7, 220.0], [88.8, 220.0], [88.9, 220.0], [89.0, 220.0], [89.1, 220.0], [89.2, 220.0], [89.3, 220.0], [89.4, 220.0], [89.5, 220.0], [89.6, 220.0], [89.7, 220.0], [89.8, 220.0], [89.9, 220.0], [90.0, 220.0], [90.1, 220.0], [90.2, 220.0], [90.3, 220.0], [90.4, 220.0], [90.5, 220.0], [90.6, 220.0], [90.7, 220.0], [90.8, 220.0], [90.9, 220.0], [91.0, 220.0], [91.1, 220.0], [91.2, 220.0], [91.3, 220.0], [91.4, 220.0], [91.5, 220.0], [91.6, 220.0], [91.7, 220.0], [91.8, 220.0], [91.9, 220.0], [92.0, 220.0], [92.1, 220.0], [92.2, 220.0], [92.3, 220.0], [92.4, 535.0], [92.5, 535.0], [92.6, 535.0], [92.7, 535.0], [92.8, 535.0], [92.9, 535.0], [93.0, 535.0], [93.1, 535.0], [93.2, 535.0], [93.3, 535.0], [93.4, 535.0], [93.5, 535.0], [93.6, 535.0], [93.7, 535.0], [93.8, 535.0], [93.9, 535.0], [94.0, 535.0], [94.1, 535.0], [94.2, 535.0], [94.3, 535.0], [94.4, 535.0], [94.5, 535.0], [94.6, 535.0], [94.7, 535.0], [94.8, 535.0], [94.9, 535.0], [95.0, 535.0], [95.1, 535.0], [95.2, 535.0], [95.3, 535.0], [95.4, 535.0], [95.5, 535.0], [95.6, 535.0], [95.7, 535.0], [95.8, 535.0], [95.9, 535.0], [96.0, 535.0], [96.1, 535.0], [96.2, 535.0], [96.3, 535.0], [96.4, 535.0], [96.5, 535.0], [96.6, 535.0], [96.7, 535.0], [96.8, 535.0], [96.9, 535.0], [97.0, 535.0], [97.1, 535.0], [97.2, 535.0], [97.3, 535.0], [97.4, 535.0], [97.5, 535.0], [97.6, 535.0], [97.7, 535.0], [97.8, 535.0], [97.9, 535.0], [98.0, 535.0], [98.1, 535.0], [98.2, 535.0], [98.3, 535.0], [98.4, 535.0], [98.5, 535.0], [98.6, 535.0], [98.7, 535.0], [98.8, 535.0], [98.9, 535.0], [99.0, 535.0], [99.1, 535.0], [99.2, 535.0], [99.3, 535.0], [99.4, 535.0], [99.5, 535.0], [99.6, 535.0], [99.7, 535.0], [99.8, 535.0], [99.9, 535.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 11.0, "series": [{"data": [[100.0, 11.0], [200.0, 1.0], [500.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 500.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 12.0, "series": [{"data": [[0.0, 12.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.74015432E12, "maxY": 1.0, "series": [{"data": [[1.74015432E12, 1.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74015432E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 196.69230769230768, "minX": 1.0, "maxY": 196.69230769230768, "series": [{"data": [[1.0, 196.69230769230768]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 196.69230769230768]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 30.766666666666666, "minX": 1.74015432E12, "maxY": 142.95, "series": [{"data": [[1.74015432E12, 142.95]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.74015432E12, 30.766666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74015432E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 196.69230769230768, "minX": 1.74015432E12, "maxY": 196.69230769230768, "series": [{"data": [[1.74015432E12, 196.69230769230768]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74015432E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 196.46153846153848, "minX": 1.74015432E12, "maxY": 196.46153846153848, "series": [{"data": [[1.74015432E12, 196.46153846153848]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74015432E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 139.53846153846152, "minX": 1.74015432E12, "maxY": 139.53846153846152, "series": [{"data": [[1.74015432E12, 139.53846153846152]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74015432E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 155.0, "minX": 1.74015432E12, "maxY": 535.0, "series": [{"data": [[1.74015432E12, 535.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.74015432E12, 408.9999999999999]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.74015432E12, 535.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.74015432E12, 535.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.74015432E12, 155.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.74015432E12, 166.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74015432E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 166.0, "minX": 1.0, "maxY": 166.0, "series": [{"data": [[1.0, 166.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 166.0, "minX": 1.0, "maxY": 166.0, "series": [{"data": [[1.0, 166.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.74015432E12, "maxY": 0.21666666666666667, "series": [{"data": [[1.74015432E12, 0.21666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74015432E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.74015432E12, "maxY": 0.21666666666666667, "series": [{"data": [[1.74015432E12, 0.21666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74015432E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.74015432E12, "maxY": 0.21666666666666667, "series": [{"data": [[1.74015432E12, 0.21666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74015432E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.74015432E12, "maxY": 0.21666666666666667, "series": [{"data": [[1.74015432E12, 0.21666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74015432E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

