<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <title>Segundo site em PHP!</title>
        
        <style type="text/css">
            .linha{
                font-weight: bold;
                color: blue;
                padding-left: 10px;
                line-height: 50px; /*Altura da linha*/
            }
        </style>
    </head>
    <body>
        <?php
            for($i = 0; $i < 10; $i++){
                print("<span class=\"linha\">Linha número " . $i . "</span><br />");
            }
        ?>
    </body>

    <script type="text/javascript">
        window.alert("Whohoo!");
    </script>
</html>