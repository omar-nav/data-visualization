var nodes = [
  { type: 'family', id: 'f1', name: 'Amazon Web Services', image: '' },
  {
    id: 'p1',
    name: 'Verizon',
    ['Type of Cloud']: 'public, hybrid',
    description:
      'Verizon is deploying AWS Wavelength as part of its 5G edge computing  offering to give developers the ability to deploy applications that require  ultra-low latency; Verizon 5G Edge provides mobile edge computing and  high-volume connectivity between users, devices and applications,  while AWS Wavelength supports the parts of an application that require  ultra-low latency to the edge of the network while connecting back to  the full range of cloud services running in AWS',
    image: 'images/verizon.png',
  },
  { type: 'family', id: 'f2', name: 'IBM Cloud', image: '' },
  {
    id: 'p2',
    name: 'ATT',
    ['Type of Cloud']: 'hybrid',
    description:
      '<br>IBM Partnership: AT&T Business Solutions is moving internal software applications to  IBM Cloud and is using Red Hatâ€™s open source platform to manage  workloads and applications <br> <br> Azure Partnership: As part of a $2 billion deal, the companies will collaborate on cloud, AI and 5G. Microsoft will be ATTs preferred cloud provider, and AT&T  will move all its non-network applications and workloads to the Azure  platform by 2024, including OSS and BSS',
    image: 'images/ATT.png',
  },
  {
    id: 'p3',
    name: 'Vodafone',
    ['Type of Cloud']: 'hybrid',
    description:
      '<br> IBM Partnership: The companies formed a $550 million venture that provides  optimization and management services from IBM Multicloud Manager  as part of Vodafones Business Multicloud Platform to large  mulinational corporations using existing public cloud offerings from  AWS, Google Cloud, Microsoft Azure and Alibaba Cloud; it also  leverages the private IBM cloud <br><br> Ericcson Cloud Partnership: Vodafone Idea in India is deploying Ericssons Cloud Packet Core on a  private cloud and the Optiva Online Charging Engine the telco is  trialing the Optiva solution on a Kubernetes-enabled private cloud  with an option to move to public cloud (Google Cloud) <br> <br> Amdocs Partnership: Vodafone Germany has deployed Amdocs end-to-end digital  cloud-native and open platform, which runs on the X platform and  includes customer care, commerce and a dynamic catalog',
    image: 'images/vodafone.png',
  },
  {
    id: 'p4',
    name: 'Dish',
    ['Type of Cloud']: 'To be determined',
    description:
      'Cloud partner To be determined. Dish Network has committed to launching a 5G broadband network by  the summer of 2023 that could serve 70% of the US population;  Founder and Chairman Charlie Ergen says operations will be cloud  native and therefore cost 25% less than other 5G network buildouts',
    image: 'images/dish.png',
  },
  { type: 'family', id: 'f3', name: 'Azure', image: '' },
  { type: 'family', id: 'f4', name: 'Google Cloud', image: '' },
  {
    id: 'p5',
    name: 'TIM',
    ['Type of Cloud']: 'public',
    description:
      'TIM is aiming to become a key player in cloud and edge computing by  partnering with Google; the CSP will expand its service portfolio for  the Italian enterprise market by offering public, private and hybrid  cloud services',
    image: 'images/tim.png',
  },
  {
    id: 'p6',
    name: 'Telefonica',
    ['Type of Cloud']: 'public',
    description:
      'Telefonica has expanded a local agreement it had with Google in Spain  into a global agreement that includes offering Google Cloud services  alongside other public cloud services and managing the workloads and  relationships across cloud providers',
    image: 'images/telefonica.png',
  },
  { type: 'family', id: 'f5', name: 'Ericsson', image: '' },
  { type: 'family', id: 'f6', name: 'Amdocs', image: '' },
  { type: 'family', id: 'f7', name: 'Alibaba', image: '' },
  {
    id: 'p7',
    name: 'China Unicom',
    ['Type of Cloud']: 'public',
    description:
      'China Unicom partnered with Alibaba Cloud to launch a new access  solution in the African market; the combined public cloud and  connectivity services help Chinese and other Asian enterprises who  want to do business in Africa',
    image: 'images/chinaunicom.png',
  },
  { type: 'family', id: 'f8', name: 'Netcracker', image: '' },
  {
    id: 'p8',
    name: 'Rakuten',
    ['Type of Cloud']: 'public',
    description:
      'Rakuten is developing a greenfield end-to-end, cloud-native  architecture for a new 5G network; this includes working with Nokia  for the core network and Netcracker for cloud-based OSS/BSS;  Rakuten was expected to launch services in October 2019 but now is  aiming for March 2020',
    image: 'images/rakuten.png',
  },
  { type: 'family', id: 'f9', name: 'MyComOSI', image: '' },
  {
    id: 'p9',
    name: 'Three.co.uk',
    ['Type of Cloud']: 'hybrid',
    description:
      'As part of its 5G core network migration, Three UK is using MYCOM  OSIs public cloud-based Experience Assurance and Analytics suite,  which runs on the AWS cloud platorm, to provide service assurance of  its Nokia core network, which includes new VNFs and existing PNFs',
    image: 'images/threeco.png',
  },
  { type: 'family', id: 'f10', name: 'Optiva', image: '' },
  {
    id: 'p10',
    name: 'Truphone',
    ['Type of Cloud']: 'public',
    description:
      'Truphone is deploying the Optiva Online Charging System, which runs  on the Google Cloud platform; the company is also using AWS and  IBM Cloud as part of other deals',
    image: 'images/truphone.png',
  },
  { type: 'family', id: 'f11', name: 'Nokia', image: '' },
];

var edges = [
  // AWS Partnerships
  { id: 1, source: 'f1', target: 'p1', type: 'public' },
  // IBM Partnerships
  { id: 2, source: 'f2', target: 'p2', type: 'hybrid' },
  { id: 3, source: 'f2', target: 'p3', type: 'hybrid' },
  // Azure Partnerships
  { id: 4, source: 'f3', target: 'p2', type: 'public' },
  // Google Cloud Partnerships
  { id: 5, source: 'f4', target: 'p5', type: 'public' },
  { id: 6, source: 'f4', target: 'p6', type: 'public' },
  // Ericcson Cloud Partnerships
  { id: 7, source: 'f5', target: 'p3', type: 'hybrid' },
  // Amdocs Partnerships
  { id: 8, source: 'f6', target: 'p3', type: 'hybrid' },
  // Alibaba Partnerships
  { id: 9, source: 'f7', target: 'p7', type: 'public' },
  // Netcracker Partnerships
  { id: 10, source: 'f8', target: 'p8', type: 'public' },
  // MyCOMOSI Partnerships
  { id: 11, source: 'f9', target: 'p9', type: 'hybrid' },
  // Optiva Partnerships
  { id: 12, source: 'f10', target: 'p10', type: 'public' },
  { id: 13, source: 'f10', target: 'p3', type: 'hybrid' },
  // Nokia Parternships
  { id: 14, source: 'f11', target: 'p8', type: 'public' },
  { id: 15, source: 'f11', target: 'p9', type: 'public' },
];

// defining the chart
var myChart = familyChart().nodes(nodes).links(edges);

// defining the width and height of the svg
var width = window.innerWidth, // default width
  height = window.innerHeight * 0.9;

// drawing the svg and calling the familyChart object.
var svg = d3
  .select('#forces')
  .append('svg')
  .attr('width', width)
  .attr('height', height)
  .attr('background-color', 'yellow')
  .call(myChart);

function familyChart() {
  var nodes = [],
    links = []; // default height

  function my(svg) {
    // set the radius of the family nodes
    var family_radius = 15;

    // set the repel force - may need to be tweaked for multiple data
    // the lower the strength the more they will repel away from each other
    // the larger the distance, the more apart they will be
    var repelForce = d3
      .forceManyBody()
      .strength(-3000)
      .distanceMax(450)
      .distanceMin(85);

    // start the simulation
    // alpha decay - if less, force takes longer but is better positioned
    // center just keeps everything in the svg - otherwise you won't see it however much you pan or zoom
    // repel force see above
    // link distance - repel takes precidence - try upping or lowering the strength and changing the distances
    // collide - this is on maximum strength and is higher for family (bigger radius) than others so should keep
    // families further apart than people
    var simulation = d3
      .forceSimulation()
      //     .alphaDecay(0.04)
      //     .velocityDecay(0.4)
      //     .force("center", d3.forceCenter(width / 2, height / 2))
      .force('xAxis', d3.forceX(width / 2).strength(0.4))
      .force('yAxis', d3.forceY(height / 2).strength(0.6))
      .force('repelForce', repelForce)
      .force(
        'link',
        d3
          .forceLink()
          .id(function (d) {
            return d.id;
          })
          .distance(dist)
          .strength(1.5)
      )
      .force(
        'collide',
        d3
          .forceCollide()
          .radius(function (d) {
            return d.r * 20;
          })
          .iterations(10)
          .strength(1)
      );

    function dist(d) {
      // used by link force
      return 100;
    }

    // define the links
    var links = svg
      .selectAll('foo')
      .data(edges)
      .enter()
      .append('line')
      .attr('stroke-width', function (d) {
        // stroke width - thicker if public/hybrid
        if (d.type == 'public' || d.type == 'hybrid') {
          return '4px';
        } else {
          return '0.5px';
        }
      })
      .attr('stroke-dasharray', function (d) {
        // dashed if hybrid
        if (d.type == 'hybrid') {
          return '6,6';
        } else {
          return '0';
        }
      })
      .attr('stroke', function (d) {
        // grey unless adopted (blue) or public/hybrid (gold) or public_invisible (white)
        if (d.type == 'public' || d.type == 'hybrid') {
          return 'gold';
        } else if (d.type == 'adopted') {
          return 'blue';
        } else if (d.type == 'public_invisible') {
          return 'white';
        } else {
          return 'grey';
        }
      });

    // define tooltip
    var tooltip = d3
      .select('body')
      .append('div')
      .attr('class', 'tooltip')
      .html('');

    // draw the nodes with drag functionality
    var node = svg
      .selectAll('foo')
      .data(nodes)
      .enter()
      .append('g')
      .call(
        d3
          .drag()
          .on('start', dragstarted)
          .on('drag', dragged)
          .on('end', dragended)
      );

    // define defs and patterns - for the images
    var defs = node.append('defs');

    defs
      .append('pattern')
      .attr('id', function (d, i) {
        return 'my_image' + i;
      })
      .attr('width', 1)
      .attr('height', 1)
      .append('svg:image')
      .attr('xlink:href', function (d) {
        return d.image;
      })
      .attr('height', '80')
      .attr('width', '80')
      .attr('x', 0)
      .attr('y', 0);

    // append ended arc - only visible if "ended" is defined
    node
      .append('path')
      .attr('class', 'semi-circle')
      .attr('fill', 'none')
      .attr('stroke', 'grey')
      .attr('stroke-width', function (d) {
        if (d.dead == undefined) {
          return '0px';
        } else {
          return '4px';
        }
      })
      .attr('d', describeArc(0, -2.5, 12.5, -90, 90));

    // append circles
    var circles = node
      .append('circle')
      .attr('class', 'circle')
      .attr('r', function (d) {
        // radius - bigger if family
        if (d.type == 'family') {
          return family_radius;
        } else {
          return 40;
        }
      })
      .attr('fill', function (d, i) {
        // white if family, otherwise image
        if (d.type == 'family') {
          return '#bdbdbd';
        } else {
          return 'url(#my_image' + i + ')';
        }
      })
      .attr('stroke', function (d) {
        // different borders for cloud parternship node and telecom node
        if (d.type == 'family') {
          return '#e41a1c';
        } else {
          return '#377eb8';
        }
      })
      .attr('stroke-width', '2px')
      .on('mouseover', function (d) {
        if (d.type !== 'family') {
          // sets tooltip.  t_text = content in html
          t_text = '<strong>' + titleCase(d.name);
          if (d['Type of Cloud'] !== undefined) {
            t_text += '<br>Type of Cloud: ' + d['Type of Cloud'];
          }
          if (d.description !== undefined) {
            t_text += '<br>Description: ' + d.description;
          }
          tooltip.html(t_text);
          return tooltip.style('visibility', 'visible');
        }
      })
      .on('mousemove', function () {
        return tooltip
          .style('top', event.pageY - 10 + 'px')
          .style('left', event.pageX + 10 + 'px');
      })
      .on('mouseout', function () {
        return tooltip.style('visibility', 'hidden');
      });

    // title case function used by tooltip and labels
    function titleCase(str) {
      str = str.toLowerCase().split(' ');
      for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
      }
      return str.join(' ');
    }

    // append labels
    var texts = node
      .append('text')
      .style('fill', 'black')
      .attr('dx', 0)
      .attr('dy', 50)
      .attr('text-anchor', 'middle')
      .text(function (d) {
        return titleCase(d.name);
      });

    // finally - attach the nodes and the links to the simulation
    simulation.nodes(nodes);
    simulation.force('link').links(edges);

    // and define tick functionality
    simulation.on('tick', function () {
      links
        .attr('x1', function (d) {
          return d.source.x;
        })
        .attr('y1', function (d) {
          return d.source.y;
        })
        .attr('x2', function (d) {
          return d.target.x;
        })
        .attr('y2', function (d) {
          return d.target.y;
        });

      node.attr('transform', function (d) {
        return 'translate(' + d.x + ',' + d.y + ')';
      });
    });

    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
      if (d.type == 'family') {
        // stickiness - toggles the class to fixed/not-fixed to trigger CSS
        var my_circle = d3.select(this).selectAll('circle');
        if (my_circle.attr('class') == 'fixed') {
          my_circle.attr('class', 'not-fixed');
        } else {
          my_circle.attr('class', 'fixed');
        }
      }
    }

    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(0);
      // stickiness - unfixes the node if not-fixed or a person
      var my_circle = d3.select(this).selectAll('circle');
      if (my_circle.attr('class') == 'not-fixed' || d.type !== 'family') {
        d.fx = null;
        d.fy = null;
      }
    }

    function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
      // for arcs - from excellent link - http://jsbin.com/quhujowota/1/edit?html,js,output
      var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

      return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians),
      };
    }

    function describeArc(x, y, radius, startAngle, endAngle) {
      // for arcs - from excellent link - http://jsbin.com/quhujowota/1/edit?html,js,output

      var start = polarToCartesian(x, y, radius, endAngle);
      var end = polarToCartesian(x, y, radius, startAngle);

      var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

      var d = [
        'M',
        start.x,
        start.y,
        'A',
        radius,
        radius,
        0,
        largeArcFlag,
        0,
        end.x,
        end.y,
      ].join(' ');

      return d;
    }
  }

  my.width = function (value) {
    if (!arguments.length) return width;
    width = value;
    return my;
  };

  my.nodes = function (value) {
    if (!arguments.length) return nodes;
    nodes = value;
    return my;
  };

  my.links = function (value) {
    if (!arguments.length) return links;
    links = value;
    return my;
  };

  my.height = function (value) {
    if (!arguments.length) return height;
    height = value;
    return my;
  };

  return my;
}
